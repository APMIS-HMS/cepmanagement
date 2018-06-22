import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDashboard = true;

  constructor() { }

  ngOnInit() {
  }

  show_db(){
    this.isDashboard = !this.isDashboard;
  }

}
