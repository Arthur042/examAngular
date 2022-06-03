import { Component, Input, OnInit } from '@angular/core';
import { Moto } from 'src/app/models/moto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() moto?: Moto;
  constructor() { }

  ngOnInit(): void {
  }

}
