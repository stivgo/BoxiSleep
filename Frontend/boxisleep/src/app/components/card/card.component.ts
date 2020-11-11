import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() imgsrc: string;
  @Input() imgalt: string;
  @Input() price: string;
  @Input() pricedis: string;
  @Input() tipo: string;
  @Input() id: string;

  constructor() {}

  ngOnInit(): void {

  }

}
