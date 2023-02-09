import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-side',
  templateUrl: './svg-side.component.html',
  styleUrls: ['./svg-side.component.scss']
})
export class SvgSideComponent implements OnInit {

  @Input() svg:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
