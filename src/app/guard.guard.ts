import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.servise";


@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate , CanActivateChild{
   constructor(
      public authService: AuthService,
      public router: Router
      ){}
   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): boolean | Observable<boolean> | Promise<boolean>{
      return this.authService.isAuth().then(isAuth =>{
         if(isAuth){
            return true
         }else{
            return this.router.navigate(['/'], {
               queryParams: {
                  auth: false
               }
            })
         }
      })
   }
   canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): boolean | Observable<boolean> | Promise<boolean>{
      return this.canActivate(route, state)
   }
}