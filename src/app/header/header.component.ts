import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isEnabled(isEnabled: any) {
    throw new Error('Method not implemented.');
  }
  public onToggleSidenav = () => { 

  }
}
