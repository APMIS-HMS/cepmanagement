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
import { CONSTANTS } from './../services/global/global.service';
import { UpdateUser } from '../models/user';
import { BaseService } from '../services/global/base-service';

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
  progressBarTxt: string = '';
  portalUser: any;
  public frm_login: FormGroup;
  showActivity = false;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private upperCasePipe: UpperCasePipe,
    private userFacadeService: UserFacadeService,
    private locker: LocalStorageService, private loaderService: LoaderService,
    private portaluserService: PortalUserService,
    private portalUserFacadeService: PortalUserFacadeService,
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
      console.log(query);
      this.userService.login(query).then(result => {
        this.userFacadeService.authenticateResource().then(payload => {
          const auth = {
            data: result.user
          };
      
          this.locker.set('apmisAuth', auth);
          this.locker.set('apmisToken', result.accessToken);
          console.log(this.locker.get('apmisToken'));
          // get user from local Db
          this.portaluserService.findByApmisId({query: {
            email : auth.data.email
          }}).then(data => {
            const existingUser = data.data[0];
            if (existingUser.length < 1) {
              // if user does not exist on management portal
              // logout the user on apmis and deny access to management portal
              this.userService.logOut();
              this.errMsg = 'Invalid user';
              this.frm_login.controls['password'].reset();
            } else {

              // user exists 
              // We first check if it is user's first time to login on management portal
              if (existingUser.loginCount < 1 ) {
                this.progressBarTxt = 'Configuring user for first time use...';
                this.showActivity = true;
                this.allowLogin = false;
                this.showLoader();
                // First authenticate user with default settings and
                // login the user with default password
                const userObj = {
                  email: auth.data.email,
                  password: CONSTANTS.DEFAULT_ADMIN_PASSWORD,
                }
                this.portaluserService.login(userObj).then(userToLogin => {
                  this.portalUserFacadeService.authenticateResource().then(pAuth => {
                    const user = {
                      data: userToLogin.user
                    };
                    this.locker.set('portalAuth', user);
                    this.locker.set('portalToken', pAuth.accessToken);

                    // update user email,password,loginCount=1
                    // redirect to dashboard page
                    const updateUserObj = {
                      _id: user.data._id,
                      email: auth.data.email,
                      password: query.password
                    }
                    this.portaluserService.patch(updateUserObj).then(updateObj => {
                      //console.log(updateObj);
                      this.router.navigate(['/portal/dashboard']).then(pay => {
                        // this.userService.isLoggedIn = true;
                         //this.portalUserFacade.setUser(updatedUserObj);
                         this.frm_login.controls['password'].reset();
                       });
    
                    });
                  });
                });

              }
              else if (existingUser.loginCount > 0){
                // user has already logged in before and password has been updated
                this.progressBarTxt = 'Please wait while we log you in...';
                this.showActivity = true;
                this.allowLogin = false;
                this.showLoader();
                this.portalUser = existingUser

                this.portaluserService.login(query).then(permissionedUser => {
                  this.portalUserFacadeService.authenticateResource().then(resUser => {
                    const permUser = {
                      data: permissionedUser.user
                    };
                    this.locker.set('portalAuth', permUser);
                    this.locker.set('portalToken', resUser.accessToken);

                      this.router.navigate(['/portal/dashboard']).then(pay => {
                        this.userService.isLoggedIn = true;
                         this.portalUserFacadeService.setUser(permissionedUser.user);
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
          this.frm_login.controls['password'].reset();
        });
      },
        error => {
          this.mainErr = true;
          this.errMsg = 'wrong login credentials';
          this.frm_login.controls['password'].reset();
        });
    } else {
      this.mainErr = false;
    }
  }

  private AuthenticatePortalUser(data) {
    // this.portaluserService.login(data).then(userData => {
    //   this.portalUserFacadeService.authenticateResource().then(res => {
    //     const user = {
    //       data: userData.user
    //     };
    //     this.locker.set('portalAuth', user);
    //     this.locker.set('portalToken', res.accessToken);
    //   });
    // },
    // error => {
    //     this.hideLoader();
    //     this.userService.logOut();
    //     this.errMsg = 'Something went wrong.Please contact the administrator';
    //     this.frm_login.controls['password'].reset();
    // },
    // error => {
    //     this.hideLoader();
    //     this.userService.logOut();
    //     this.errMsg = 'Something went wrong.Please contact the administrator';
    //     this.frm_login.controls['password'].reset();
    // });
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}

