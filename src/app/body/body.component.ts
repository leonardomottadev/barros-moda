import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { ContextMenuComponent } from '../context-menu/context-menu.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CarouselComponent, ContextMenuComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
