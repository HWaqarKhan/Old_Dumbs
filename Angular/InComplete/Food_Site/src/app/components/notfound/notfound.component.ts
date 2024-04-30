import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  @Input() visible = false;
  @Input() notFoundMessage = "Nothing Found!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/";
  constructor() { }

  ngOnInit(): void {
  }

}
