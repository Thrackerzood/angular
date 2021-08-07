import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { IPosts, PostsService } from "../posts.servise";

@Component({
   selector: 'aboutId-component',
   templateUrl: './aboutId.component.html',
   styleUrls: [ './aboutId.component.scss' ]
})

export class AboutIdComponent implements OnInit{
   post: IPosts | undefined
   constructor(
      private route: ActivatedRoute,
      public PostsService: PostsService
   ){}
   ngOnInit(): void{
      this.post = this.route.snapshot.data.post
   }
}