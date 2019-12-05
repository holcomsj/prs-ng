import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/model/menu-items.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItems[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      new MenuItems('User', '/users/list', 'User List'),
      new MenuItems('Vendor', '/vendors/list', 'Vendor List'),
      new MenuItems('Product', '/products/list', 'Product List'),
      new MenuItems('Request', '/requests/list', 'Request List'),
      new MenuItems('Review', '/reviews/list', 'Review List'),
      new MenuItems("Login", '/users/login', 'User Login')
    ];
  }

}
