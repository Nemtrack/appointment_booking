import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
  .shield-style { height: 80px }
  .navbar { height: 100px;
            font-size: 150%; }
  .navbar-text { text-align: right;
                padding-right: 20px; }
  li > a.active { color: orange }
  `]
})

export class NavBarComponent {
  constructor(public auth:AuthService){

  }
}
