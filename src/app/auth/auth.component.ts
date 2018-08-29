import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user-management/user.service';
import { UpperCasePipe } from '@angular/common';
import { UserFacadeService } from '../services/user-management/user-facade.service';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

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
  //errMsg = 'you have unresolved errors';
  public frm_login: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private upperCasePipe:UpperCasePipe,
  private userFacadeService : UserFacadeService,
  private locker: LocalStorageService,
private router : Router ) { }

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
          let auth = {
            data: result.user
          };
          console.log(auth);
          this.locker.set('auth', auth);
          this.locker.set('token', result.accessToken);
          // this.locker.setObject('auth', auth);
          // this.locker.setObject('token', result.accessToken);

          this.router.navigate(['/portal/dashboard']).then(pay => {
            this.userService.isLoggedIn = true;
            // this.userService.announceMission('in');
            // this.systemModule.off();
            this.frm_login.controls['password'].reset();
          });
        }, error => {
          console.log(error);
          // this.systemModule.off();
        }).catch(merr => {
          console.log('merr =>',merr);
          // this.systemModule.off();
          this.frm_login.controls['password'].reset();
        });
      },
        error => {
          
          this.mainErr = true;
          this.errMsg = 'wrong login credentials';
          console.log(this.mainErr);
          this.frm_login.controls['password'].reset();
        });
    } else {
      this.mainErr = false;
    }
  }

}
