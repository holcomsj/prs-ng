import { Component, OnInit } from '@angular/core';
import { MenuItems } from 'src/app/model/menu-items.class';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';
import { BaseComponent } from 'src/app/feature/base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menuItems: MenuItems[] = [];
  id: number = 0;

  constructor(protected sysSvc: SystemService) {
    super(sysSvc);
   }

  ngOnInit() {
    super.ngOnInit();
    this.menuItems = [
      new MenuItems('User', '/users/list', 'User List'),
      new MenuItems('Vendor', '/vendors/list', 'Vendor List'),
      new MenuItems('Product', '/products/list', 'Product List'),
      new MenuItems('Request', '/requests/list', 'Request List'),
      new MenuItems('Review', '/requests/review/' + this.sysSvc.loggedInUser.id, 'Review List'),
      new MenuItems("Logout", '/users/login', 'User Login')
    ];
    
  }

}
