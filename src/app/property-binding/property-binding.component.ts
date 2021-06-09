import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  username:string="nileshtayade";
  isDisabled:boolean=false;
  prodata:string="This is by Inner Html Propeerty Binding"

img1="assets/admin.jpg";

images :string[]=[
  "assets/laptop1.jpeg",
  "assets/laptop2.jpeg",
  "assets/laptop3.jpeg",
  "assets/laptop4.jpeg",
  "assets/laptop5.jpeg",

]


  ngOnInit(): void {
  }

 
}
