import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen = false;
ToggleOpen() {
this.isOpen= !this.isOpen;
}

showSubMenu: boolean = false;

  toggleSubMenu() {
    this.showSubMenu = !this.showSubMenu;
  }
  
  showSubMenu2: boolean = false;

  toggleSubMenu2() {
    this.showSubMenu2 = !this.showSubMenu2;
  }
  showSubMenu3: boolean = false;

  toggleSubMenu3() {
    this.showSubMenu3 = !this.showSubMenu3;
  }

}
