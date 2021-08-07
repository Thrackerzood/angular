import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './myComponent.component.html',
  styleUrls: ['./myComponent.component.scss']
})
export class MyComponent implements OnInit{
  ngOnInit(){

  }
  @ContentChild("childComponent", {static:false})
  header: ElementRef|undefined;
    
  change() { 
      if(this.header !==undefined){
          console.log(this.header.nativeElement.textContent); 
          this.header.nativeElement.textContent = "Hell to world!"; 
      }
  }
  name:string = 'name'
  counter:number = 0
  inc(){
     this.counter ++
  }
  dec(){
     this.counter --
  }
}