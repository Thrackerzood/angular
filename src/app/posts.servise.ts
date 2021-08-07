import { Injectable } from "@angular/core";

export interface IPosts {
   title: string,
   text: string,
   id: number
}

@Injectable({ providedIn: 'root' })
export class PostsService{
   posts: IPosts[] = [
      {title: 'post 1', text: 'post 1', id: 1},
      {title: 'post 2', text: 'post 2', id: 2},
      {title: 'post 3', text: 'post 3', id: 3},
      {title: 'post 4', text: 'post 4', id: 4},
   ]
   getById(id:number){
      return this.posts.find(p => p.id === id)
   }
}