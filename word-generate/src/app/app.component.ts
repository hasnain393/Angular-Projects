import { Component } from '@angular/core';
import arraywords from '../utils/words'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generate';
  word='' ;
  limit=10;

  handlechange(newLimit:number){
    this.limit=newLimit;

  }
  generateword(){
    console.log("#####################3");
    
    console.log("slice",arraywords.slice(0,this.limit));
    console.log("join",arraywords.slice(0,this.limit).join("-"));
    
    this.word=arraywords.slice(0,this.limit).join(' ');

  }
}
