import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/feature/base/base.component';
import { MenuItems } from 'src/app/model/menu-items.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends BaseComponent implements OnInit {

  menuItems: MenuItems[] = [];
  id: number = 0;

  constructor(protected sysSvc: SystemService) {
    super(sysSvc);
   }
  ngOnInit() {
    this.menuItems = [
      new MenuItems('About', '/static/about', 'About Page'),
      new MenuItems('Resources', '/static/resources', 'Resources Page')]
  }
}


