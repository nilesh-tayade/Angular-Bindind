import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-demo',
  templateUrl: './interpolation-demo.component.html',
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg:string ="This is Interpolation Demo"

firstname:string ="Nilesh"

a:number=20;
b:number=40;

getName()
{
  return "My Name is Anthony Gonsalvis"
}

}
