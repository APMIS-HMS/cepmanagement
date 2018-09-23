import { async } from '@angular/core/testing';
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
import { resolve } from 'url';

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
  private portalUser: any;
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

  async login(valid) {
    if (valid) {
      const query = {
        email: this.upperCasePipe.transform(this.frm_login.controls['username'].value),
        password: this.frm_login.controls['password'].value
      };
      try{
        const authUser = await this.userService.login(query);
        const reAuthUser = await this.userFacadeService.authenticateResource();
        const authenticatedUser = {
          data : authUser.user
        };
        this.locker.set('apmisAuth', authenticatedUser);
        this.locker.set('apmisToken', reAuthUser.accessToken);
        // get user from local Db
        const userExist = await this.portaluserService.findByApmisId(
          {
            query: {
              email: authenticatedUser.data.email
            }
          }
        );
        // check if user has been permissioned on management portal server
        if (userExist.data[0].length < 1){
            // if user does not exist on management portal
            // logout the user on apmis and deny access to management portal
            this.userService.logOut();
            this.errMsg = 'Invalid user';
            this.frm_login.controls['password'].reset();
        } else {
          // user exists, we proceed with portal check
          // this checks if it is user's first time to login on management portal
          if (userExist.data[0].loginCount < 1){
            // the system perform login operation for the user with default settings
            this.progressBarTxt = 'Configuring user for first time use...';
            this.showActivity = true;
            this.allowLogin = false;
            this.showLoader();
            const userObj = {
              email: authenticatedUser.data.email,
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
                  email: authUser.data.email,
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
          } else if(userExist.data[0].loginCount > 0){
            // user has already logged in before and password has been updated
            this.progressBarTxt = 'Please wait while we log you in...';
            this.showActivity = true;
            this.allowLogin = false;
            this.showLoader();
            // this.AuthenticatePortalUser(query);
            const portalLogin = await this.portaluserService.login(query);
            const authPortalUser = await this.portalUserFacadeService.authenticateResource();
            const portalUser = {
              data: portalLogin.user
            };
            this.locker.set('portalAuth', portalLogin);
            this.locker.set('portalToken', authPortalUser.accessToken);

            this.router.navigate(['/portal/dashboard']).then(pay => {
              this.userService.isLoggedIn = true;
               this.portalUserFacadeService.setUser(portalUser.data);
               this.frm_login.controls['password'].reset();
             });
          }
        }
      }
      catch(error) {
        this.userService.logOut();
        this.errMsg = 'Server error. Please contact system administrator';
        this.frm_login.controls['password'].reset();
      }

    } else {
      this.mainErr = false;
    }
  }

  private async AuthenticatePortalUser(user) {
    const portal = await this.portaluserService.login(user);
    const reAuthUser = await this.portalUserFacadeService.authenticateResource();
    this.portalUser = {
      data: portal.user
    };
    console.log(this.portalUser);
    this.locker.set('portalAuth', user);
    this.locker.set('portalToken', reAuthUser.accessToken);
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}

