import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { EmployeeService } from './appcomponent.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [EmployeeService]
})
export class AppComponent {
 public  title : string='myTube';
 public inputName : string ="";
 public inputName1 : string ="";
 public selectedUrl : any;
 public playvideo :any;
 MyVideos :[{
  vName : string ,
  vUrl  : string
}];

constructor(private sanitizer : DomSanitizer) { 
  this.MyVideos=[
    {vName: "Angular video1", vUrl:"https://www.youtube.com/embed/lcLCwa8QBQ0"},
    {vName: "Angular video2", vUrl :"https://www.youtube.com/embed/sH6MWLYeaJg"}
   ]
}

selectVideo(item){
  this.selectedUrl=item.vUrl;
  this.playvideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedUrl)
   
}

onSubmit(value : any){
  console.log(value);
}
}
