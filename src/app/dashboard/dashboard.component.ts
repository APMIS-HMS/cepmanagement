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
  }

  show_db(){
    this.isDashboard = !this.isDashboard;
    if(this.isDashboard){
      this._router.navigate(['/app/dashboard']);
    } else{
      this._router.navigate(['/app/management-portal']);
    } 
  }

}
