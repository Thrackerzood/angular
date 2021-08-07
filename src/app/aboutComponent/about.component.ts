import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { PostsService } from "../posts.servise";

@Component({
   selector: 'about-component',
   templateUrl: './about.component.html',
   styleUrls: [ './about.component.scss' ]
})
export class AboutComponent implements OnInit{
   showIds = false
   constructor (
      public PostsService: PostsService,
      private route: ActivatedRoute,
      private router: Router
   ){}
   ngOnInit(){
      this.route.queryParams.subscribe((params: Params)=>{
         this.showIds = !params.showIds
         console.log(this.showIds)
      })
   }
   showId(){
      this.router.navigate(['/about'], {
         queryParams: {
            showIds: true
         }
      })
   }
}