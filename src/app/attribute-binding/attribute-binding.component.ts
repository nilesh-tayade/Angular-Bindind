import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit {


col:number=4;
bdr:number=5;

  constructor() { }

  ngOnInit(): void {
  }

}
