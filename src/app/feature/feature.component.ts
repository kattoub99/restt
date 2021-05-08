import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  @Input() imgurl ='https://cdn.pixabay.com/photo/2015/11/07/11/02/sparkling-wine-1030754_960_720.jpg';
 
@Input() title ='sea view';
@Input() description=' near all sea that occur in between';
  constructor() { }

  ngOnInit(): void {
  }

}
