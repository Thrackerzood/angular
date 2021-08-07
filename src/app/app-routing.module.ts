import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./aboutComponent/about.component";
import { AboutIdComponent } from "./aboutIdComponent/aboutId.component";
import { ErrorPageComponent } from "./error-page/error.component";
import { AuthGuard } from "./guard.guard";
import { HomeComponent } from "./homeComponent/home.component";
import { PostResolver } from "./post.resolver";

const routes:any = [
   {path: '', component: HomeComponent},
   {path: 'about', component: AboutComponent, canActivate: [ AuthGuard ], children: [{
      path: 'extra', component: AboutComponent
   }]},
   {path: 'about/:id', component: AboutIdComponent , 
      resolve: {
         post: PostResolver
      }
   },
   {path: 'error', component: ErrorPageComponent},
   {path: '**', redirectTo : 'error'}
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule{

}