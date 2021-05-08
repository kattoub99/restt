import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// Features : FeatureInfo[] =[];
// constructor(){
//   var x = new FeatureInfo();
  // fetch("https://api2222.herokuapp.com/data")
   //.then(x =>  x.json().then(data => ({status: x.status, body: data})))
   //.then(obj => console.log(obj));
//this.Features.push(x);
 //}
//}
 //export class FeatureInfo{
   //imgurl : string;
   //title: string;
   //description : string;
   Users=[];
   constructor() {fetch('https://api2222.herokuapp.com/data')
   .then(response => response.json())
   .then(json => {this.Users=json;})}

 }