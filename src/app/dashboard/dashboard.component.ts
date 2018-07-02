import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDashboard = true;

  constructor(private _router: Router) { }

  ngOnInit() {
    const page: string = this._router.url;
    this.checkPageUrl(page);
  }

  show_db(){
    this.isDashboard = !this.isDashboard;
    if(this.isDashboard){
      this._router.navigate(['/app/dashboard']);
    } else{
      this._router.navigate(['/app/management-portal']);
    } 
  }

  checkPageUrl(param: string) {
    if (param.includes('dashboard')) {
      this.isDashboard = true;
    } else if (param.includes('management-portal')) {
      this.isDashboard = false;
    }
  }

}
