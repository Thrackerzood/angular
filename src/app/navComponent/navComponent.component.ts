import { Component } from "@angular/core";
import { AuthService } from "../auth.servise";

@Component({
   selector: 'nav-component',
   templateUrl: './navComponent.component.html',
   styleUrls: [ './navComponent.component.scss' ]
})

export class NavComponent{
   constructor(
      public auth: AuthService
   ){
      
   }
}