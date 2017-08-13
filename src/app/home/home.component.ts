import { Component, OnInit } from '@angular/core';
import ProfilesMocks from 'shared/mocks/profiles.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nicknames: string[];

  constructor() {}

  ngOnInit() {
    this.nicknames = ProfilesMocks.map(p => p.nickname);
  }
}
