import { Component, OnInit } from '@angular/core';
var randomColor = require('randomcolor');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  characterList: string[];
  color = '';

  ngAfterViewInit() {
    this.characterList = [];
    this.randomString();
    this.randomColor();

  }

  randomString() {
    let chars = [
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      '_',
      '-',
      '+',
      '=',
    ];
    for (let i = 0; i < 12; i++) {
      this.characterList.push(chars[Math.floor(Math.random() * chars.length)]);
    }
  }

  randomColor() {
    return randomColor();
  }

  constructor() {
    this.color = '';
    this.characterList = [];
  }
  ngOnInit(): void {
    

  }
}
