import { Component, OnInit } from '@angular/core';


export interface Items {
  imgItem: string;
  tittleItem: string;
  priceItem: number;
  numItem: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items: Items[] = [
    {
      imgItem: '../../../assets/menu.jpg',
      tittleItem: 'La hamburguesa',
      priceItem: 12000,
      numItem: 1
    }, 
    {
      imgItem: '../../../assets/menu.jpg',
      tittleItem: 'La hamburguesa',
      priceItem: 12000,
      numItem: 1
    }
  ];

}
