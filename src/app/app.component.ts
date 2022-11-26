import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
//  name='CR7'
//  msg="Lionel Messi"
msg: string
name: string
newMsg: string

ngOnInit(){
  this.msg = 'CR7'
  this.name = 'Messi'
}

handleClick(event: Event){
  console.log('clicked')  
}
handleInput(event: Event){
  const {value} = event.target as HTMLInputElement
  this.newMsg = value
}
}
