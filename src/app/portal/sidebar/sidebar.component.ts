import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
   public dataExternal=[
      {
      "text": "Overview",
      "icon": "people",
      "routerLink": "overview"
      },
     {
      "text": "Docs",
      "icon": "supervised_user_circle",
      "routerLink": "docs"
    },
    {
      "text": "orders",
      "icon": "supervised_user_circle",
      "routerLink": "orders"
    },

  {
    "text": "pages",
    "icon": "inventory_1",
    "children": [{
      "text": "notification",
      "icon": "category",
      "routerLink": "notifications"
  },
  {
      "text": "accounts",
      "icon": "layers",
      "routerLink": "accounts"
  },
  {
      "text": "settings",
      "icon": "all_inbox",
      "routerLink": "settings"
  }
  ]
    },
  {
      "text": "External",
      "icon": "inventory_2",
      "children": [{
              "text": "login",
              "icon": "category",
              "routerLink": "login"

          },
          {
              "text": "sign-up",
              "icon": "layers",
              "routerLink": "sign-up"

          },
          {
              "text": "reset-password",
              "icon": "all_inbox",
          },
          {
            "text": "404-error",
            "icon": "all_inbox",
        }
      ]
  },
  {
    "text": "Charts",
    "icon": "people",
    "routerLink": "charts"
  },
  {
    "text": "Help",
    "icon": "people",
    "routerLink": "help"
  },
  {
    "text": "settings",
    "icon": "people",
    "routerLink": "settings"
  },
  {
    "text": "Download",
    "icon": "people",
    "routerLink": "help"
  },
  {
    "text": "License",
    "icon": "people",
    "routerLink": "help"
  }
  ]

  public dataChildren:any = []
  
  constructor(private router:Router , private dataservice:DataService) { 

  }

  ngOnInit(): void {
   this.dataservice.getMenu().subscribe((data)=>{
    
    console.log(data)
   }

  )
  }

  callUrl(data:any){
    console.log("this is ",data)
    this.router.navigate(['/users',data])
  }

  

}
