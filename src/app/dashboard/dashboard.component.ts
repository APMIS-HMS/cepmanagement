import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user-management/user.service';
declare var $;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showFull = false; 
  isPortal = true;
  isPortalDashboard = true;
  dateToday : string = '';
  managementMenus : any;
  reportMenus : any;
  activeSubMenu : {};
  isOpen : boolean = false;
  subMenuOpen : boolean = false;

  constructor(private _router: Router,private userService : UserService) {

    this.managementMenus = [
      {
        path: '',
        title: 'Management portal',                                                  
        icon: 'mdi mdi-gauge',                                                
        class: 'has-arrow',                                                 
        label: 0,                                                           
        labelClass: 'label label-rouded label-themecolor pull-right',         
        extralink: false,
        active : true,
        
        submenu: [  
            {
              path: 'dashboard',
              title: 'Dashboard',
              icon: '',
              class: '',
              label: '',
              labelClass: '',
              extralink: false,
              active : true,
              submenu: []
            },                                                      
            {
                path: 'management-portal/facilities',
                title: 'Facilities',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : true,
                submenu: []
            },
            {
                path: 'management-portal/titles',
                title: 'Title',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : false,
                submenu: []
            },
            {
                path: 'management-portal/countries',
                title: 'Country',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Vital locations',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : false,
                submenu: []
           }
        ]
      

    },
    {
      path: '',
      title: 'User management',                                                  
      icon: 'mdi mdi-gauge',                                                
      class: 'has-arrow',                                                 
      label: 1,                                                           
      labelClass: 'label label-rouded label-themecolor pull-right',         
      extralink: false,
      active : true,
      submenu: [                                                        
          {
              path: 'user-management/users',
              title: 'Manage user',
              icon: '',
              class: '',
              label: '',
              labelClass: '',
              extralink: false,
              active : false,
              submenu: []
          },
          {
              path: null,
              title: 'Configuration',
              icon: '',
              class: '',
              label: '',
              labelClass: '',
              extralink: false,
              active : false,
              submenu: [
                {
                  path: 'user-management/roles',
                  title: 'Roles',
                  icon: '',
                  class: '',
                  label: '',
                  labelClass: '',
                  extralink: false,
                  active : false,
                  submenu: []
                },
                {
                  path: 'user-management/routes',
                  title: 'Routes',
                  icon: '',
                  class: '',
                  label: '',
                  labelClass: '',
                  extralink: false,
                  active : false,
                  submenu: []
                }
              ]
          },
          {
              path: '/dashboard/dashboard3',
              title: 'Create User',
              icon: '',
              class: '',
              label: '',
              labelClass: '',
              extralink: false,
              active : false,
              submenu: []
          },
      ]
    }
    ];

  this.reportMenus = [
      {
        path: '',
        title: 'Report 1',                                                  
        icon: 'mdi mdi-gauge',                                                
        class: 'has-arrow',                                                 
        label: 0,                                                           
        labelClass: 'label label-rouded label-themecolor pull-right',         
        extralink: false,
        active : true,
        
        submenu: [                                                        
            {
                path: 'analytics-portal/facilities',
                title: 'Report Submenu1',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : true,
                submenu: []
            },
            {
                path: 'analytics-portal/title',
                title: 'Report Submenu2',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : false,
                submenu: []
            },
            {
                path: 'analytics-portal/country',
                title: 'Report Submenu3',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                active : false,
                submenu: []
            },
            {
              path: 'analytics-portal/dashboard3',
              title: 'Report Submenu4',
              icon: '',
              class: '',
              label: '',
              labelClass: '',
              extralink: false,
              active : false,
              submenu: []
          },
          {
            path: 'analytics-portal/dashboard3',
            title: 'Report Submenu5',
            icon: '',
            class: '',
            label: '',
            labelClass: '',
            extralink: false,
            active : false,
            submenu: []
        }
        ]
    }
  ];
}

  ngOnInit() {
    const page: string = this._router.url;
    this.checkPageUrl(page);
  }

  show_route(){
    this.isPortal = !this.isPortal;
    if(this.isPortal){
      this._router.navigate(['/portal/dashboard']);
    } else{
      this._router.navigate(['/report/dashboard']);
    } 
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }
  toggleSubMenu(){
    this.subMenuOpen = !this.subMenuOpen;
  }
  onLogout(){
    this.userService.logOut();
    this.userService.isLoggedIn = false;
  }
  showFullTb(){
    this.showFull = !this.showFull;
  }

  checkPageUrl(param: string) {
    if (param.includes('portal')) {
      this.isPortalDashboard = true;
      } else if (param.includes('report')) {
        this.isPortal = false;
      }
    }
    child_click(title,j,i){
      if(title = this.managementMenus[i].submenu[j].title)
      {
        console.log(this.managementMenus[i].submenu[j].active = !this.managementMenus[i].submenu[j].active);
      }
      //this.menus[i].submenu[j].active = !this.menus[i].submenu[j].active;
      //e.stopPropagation();
    }

    openSubMenu(index,subIndex){
      //if()
      //console.log(this.menus[index].submenu[subIndex].active = !this.menus[index].submenu[subIndex].active);
      //this.submenu[j].active = !this.menus[index].submenu[j].active;
    }

  openMenu(index,title){
    title = title.toLowerCase();
    if (title === 'management portal'){
      this.managementMenus[index].active = !this.managementMenus[index].active;
    }
    else if (title === 'user management'){
      this.managementMenus[index].active = !this.managementMenus[index].active;
    }
    else if( title === 'configuration'){
      this.managementMenus[index].active = !this.managementMenus[index].active;
    }

  }
  
}
