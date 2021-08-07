import { Injectable } from "@angular/core";

@Injectable({
   providedIn: 'root'
})

export class AuthService {
   public auth= false
   login(){
      this.auth = true
      console.log(this.auth)
   }
   logout(){
      this.auth = false
      console.log(this.auth)
   }
   isAuth():Promise<boolean>{
      return new Promise<boolean>(resolve => {
         setTimeout(()=>{
            resolve(this.auth)
         },1000)
      })
   }
}