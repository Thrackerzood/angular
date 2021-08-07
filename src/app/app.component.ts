import { Component, OnInit, ViewChild } from '@angular/core';
import { MyComponent } from './myComponent/myComponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(){

  }
  @ViewChild(MyComponent , {static: false})
  private counterComponent: MyComponent | undefined
  increment(){ this.counterComponent?.inc() }
  decrement(){ this.counterComponent?.dec() }
  child: string = 'Hello!'
}