import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum-post-widget-item',
  templateUrl: './forum-post-widget-item.component.html',
  styleUrls: [
    './forum-post-widget-item.component.scss',
  ],
})
export class ForumPostWidgetItemComponent implements OnInit {

  @Input() title: string;

  constructor() {
  }

  ngOnInit() {
  }
}
