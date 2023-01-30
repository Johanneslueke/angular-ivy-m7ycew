import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-navigation-page',
  templateUrl: './navigation-page.component.html',
  styleUrls: ['./navigation-page.component.css'],
})
export class NavigationPageComponent implements OnInit {
  links = [
    {
      path: 'List',
      label: 'Todos',
      icon: '',
    },
  ];

  constructor(private media: MediaMatcher) {}

  ngOnInit() {}
}
