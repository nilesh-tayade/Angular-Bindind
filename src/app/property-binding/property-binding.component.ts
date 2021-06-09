import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

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

  persons :Person[]=[
    {
      fullname:"Nilesh Tayade",
      city:"Pune",
      image: "assets/laptop1.jpeg",
      course:"Java"
    },
    {
      fullname:"Aniket  Dhaigude",
      city:"Satara",
      image: "assets/laptop2.jpeg",
      course:"Python"
    },
    {
      fullname:"Ajinkya Deshmukh",
      city:"Akola",
      image: "assets/laptop3.jpeg",
      course:"Android"
    },
    {
      fullname:"Mahesh Sukalkar",
      city:"Buldhana",
      image: "assets/laptop4.jpeg",
      course:"PHP"
    }
  ]
 
}
