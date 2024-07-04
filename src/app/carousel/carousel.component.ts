import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Product } from './product'
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, ToolbarModule, ButtonModule, TagModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  products: Product[] = [];
  responsiveOptions: any[];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Relógio Moderno',
        price: 150,
        image: 'bamboo-watch.jpg',
        inventoryStatus: 'INSTOCK'
      },
      {
        id: 2,
        name: 'Relógio Minimalista',
        price: 130,
        image: 'black-watch.jpg',
        inventoryStatus: 'LOWSTOCK'
      },
      {
        id: 3,
        name: 'Camisa Casual',
        price: 13,
        image: 'blue-t-shirt.jpg',
        inventoryStatus: 'INSTOCK'
      },
      {
        id: 4,
        name: 'Smart Band',
        price: 71,
        image: 'blue-band.jpg',
        inventoryStatus: 'OUTOFSTOCK'
      },
      {
        id: 5,
        name: 'Bolsa',
        price: 90,
        image: 'brown-purse.jpg',
        inventoryStatus: 'OUTOFSTOCK'
      }
    ];
  }

  getSeverity(status: string): string {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return '';
    }
  }
}
