import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { IPosts, PostsService } from "./posts.servise";
import { delay } from "rxjs/operators"


@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<IPosts| null>{
   constructor(public postsService: PostsService){}
   resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<IPosts> | Promise<IPosts> | IPosts | null | any{
      return of(this.postsService.getById(+route.params['id']))
         .pipe( delay(500))
   }
}