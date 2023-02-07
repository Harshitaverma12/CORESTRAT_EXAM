
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Corestrat';
  name = 'Angular';
  public isCollapsed = true;

  public call(){
    console.log("hello")
  }
}

