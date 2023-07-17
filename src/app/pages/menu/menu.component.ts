import { Component, OnInit, ViewChild  } from '@angular/core';
import { Location } from '@angular/common';
import { SesionService } from 'src/app/services/sesion.service';

export interface Categorias {
  name: string;
}


export interface Products {
  imgUrlProduct: string;
  tittleProduct: string;
  priceProduct: number
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;
  mybreakpoint: number;
  constructor(
    private location: Location,
    private sesionService: SesionService
  ) {

  }

  ngOnInit(): void {}

  openFileInput() {
    this.fileInput.nativeElement.click();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Lógica para manejar el archivo seleccionado
  }

  back(): void {
    this.location.back()
  }

  categorias: Categorias[] = [
    { name: 'hamburguesas' },
    { name: 'bebidas' },
    { name: 'postres' },
    { name: 'complementos' },
    { name: 'etcetera' },
    { name: 'etcetera' },
    { name: 'lorem ipsum' },
  ];

  promos: any[] = [
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    },
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    },
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    },
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    },
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    },
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    },
    {
      imgUrlPromo: '../../../assets/menu.jpg',
      tittlePromo: 'La hamburguesa vegana que te hara sentir mejor persona',
      pricePromo: 120000
    }    
  ];

  products: Products[] = [
    {
      imgUrlProduct: '../../../assets/menu.jpg',
      tittleProduct: 'La hamburguesa vegana que te hara sentir mejor persona',
      priceProduct: 120000
    },
    {
      imgUrlProduct: '../../../assets/menu.jpg',
      tittleProduct: 'La hamburguesa vegana que te hara sentir mejor persona',
      priceProduct: 120000
    },
    {
      imgUrlProduct: '../../../assets/menu.jpg',
      tittleProduct: 'La hamburguesa vegana que te hara sentir mejor persona',
      priceProduct: 120000
    },
    {
      imgUrlProduct: '../../../assets/menu.jpg',
      tittleProduct: 'La hamburguesa vegana que te hara sentir mejor persona',
      priceProduct: 120000
    }    
  ];
}
