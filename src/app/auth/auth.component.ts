import { PortalUserFacadeService } from './../services/user-management/portal-user-facade.service';
import { PortalUserService } from './../services/user-management/portal-user.service';
import { HostUrl } from './../models/generic-state';
import { DataShareService } from './../shared/datashare.service';
import { Component, OnInit, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user-management/user.service';
import { UpperCasePipe } from '@angular/common';
import { UserFacadeService } from '../services/user-management/user-facade.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { LoaderService } from '../shared/loader.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  input_username;
  input_password;
  mainErr = false;
  errMsg = '';
  allowLogin = true;
  signUpProcessOn = false;
  serviceName = 'users';
  hostUrl: HostUrl;
  userObj: any;
  public frm_login: FormGroup;
  isFirstTimeLogin = false;
  progressBarTxt = 'Configuring user for first time use';
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private upperCasePipe: UpperCasePipe,
    private userFacadeService: UserFacadeService,
    private portalUserFacade: PortalUserFacadeService,
    private locker: LocalStorageService, private loaderService: LoaderService,
    private portaluserService: PortalUserService,
    private router: Router, private dataShare: DataShareService,
   ) {
    //  this.hostUrl = {
    //    url : CONSTANTS.APMIS_HOST_URL
    //  }
    //  this.hostService.setHostUrl(CONSTANTS.APMIS_HOST_URL);
  }

  ngOnInit() {
    this.frm_login = this.formBuilder.group({
      username: ['', [<any>Validators.required]],
      password: ['', [<any>Validators.required]]
    });

    this.frm_login.valueChanges.subscribe(payload => {
      if (this.frm_login.dirty) {
        this.mainErr = true;
      }
    });
  }

  login(valid) {
    if (valid) {
      const query = {
        email: this.upperCasePipe.transform(this.frm_login.controls['username'].value),
        password: this.frm_login.controls['password'].value
      };
      this.userService.login(query).then(result => {
        this.userFacadeService.authenticateResource().then(payload => {
          const auth = {
            data: result.user
          };
          this.locker.set('apmisAuth', auth);
          this.locker.set('apmisToken', result.accessToken);
          console.log(auth);

          // get user from local Db
          this.portaluserService.findByApmisId({query: {
            apmisId : auth.data.email
          }}).then(data => {
            const portalUser = data.data[0];
            console.log(portalUser.loginCount);
            // check if user exist
            if (portalUser.length < 1) {
              this.userService.logOut();
              console.log('portal user did not return data');
              this.errMsg = 'Invalid user';
              this.frm_login.controls['password'].reset();
            } else { // check if it's user's first time to login
              if (portalUser.loginCount === 0 ) {
                console.log('user is admin but never logged in');
                this.isFirstTimeLogin = true;
                this.allowLogin = false;
                this.showLoader();
                // update user records on management portal
                this.userObj = {
                  email : auth.data.email,
                  password: query.password
                };

                // this.portaluserService.update(this.userObj);
                // show progress bar, update user email,password,loginCount=1
                // redirect to dashboard page

              } else { // system authenticates user on management portal and redirects to dashboard
                this.portaluserService.login(query).then(userObj => {
                  this.portalUserFacade.authenticateResource().then(res => {
                    const userAuth = {
                      data: userObj.user
                    };
                    this.locker.set('portalAuth', userAuth);
                    this.locker.set('portalToken', res.accessToken);

                    this.router.navigate(['/portal/dashboard']).then(pay => {
                     // this.userService.isLoggedIn = true;
                      this.portalUserFacade.setUser(userAuth);
                      this.frm_login.controls['password'].reset();
                    });
                  });
                });
              }
            }
          });
        }, error => {
          console.log(error);
        }).catch(merr => {
          console.log('merr =>', merr);
          this.frm_login.controls['password'].reset();
        });
      },
        error => {
          this.mainErr = true;
          this.errMsg = 'wrong login credentials';
          console.log(error);
          this.frm_login.controls['password'].reset();
        });
    } else {
      this.mainErr = false;
    }
  }
  private showLoader(): void {
    this.loaderService.show();
  }

  private hideLoader(): void {
    this.loaderService.hide();
  }
}

