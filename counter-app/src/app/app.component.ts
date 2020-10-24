import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'counter-app';
  count:number = 0;

  handleinc(){
    if(this.count === 10){

      this.count=0;
    }
    this.count=this.count+1;

  }
  handledec(){
    if(this.count === 0){

      this.count=0;
    }
    else{
      this.count=this.count-1;
    }
    
}
handleres(){
  this.count=0;

}


}
