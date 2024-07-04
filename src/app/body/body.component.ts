import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
