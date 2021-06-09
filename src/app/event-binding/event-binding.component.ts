import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }
data:string;
  ngOnInit(): void {
  }
  msg:string="Welcome";

  m1()
  {
this.msg="This is mouseover";
  }

  m2()
  {
this.msg="This is mouse out";
  }

  loadData()
  {
    this.data="This is loaded when Load Data button is Clicked";
  }
  
invalue:string;
  onclick(sun)
  {
this.invalue=sun;
  }
}
