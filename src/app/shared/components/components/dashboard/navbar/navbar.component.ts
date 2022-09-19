import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/IMenu';
import { MenuService } from 'src/app/services/menu.service';

import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  menu: IMenu[] = []
  
  constructor(private _menuService: MenuService) { }

  verMenu() {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data
      console.log(data)
    })
  }


  ngOnInit(): void {
    this.verMenu()
  }

}
