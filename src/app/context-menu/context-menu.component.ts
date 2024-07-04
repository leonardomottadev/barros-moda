import { Component } from '@angular/core';
import { ContextMenuModule } from 'primeng/contextmenu';
import { BadgeModule } from 'primeng/badge';
import { data, items } from './items';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-context-menu',
  standalone: true,
  imports: [ContextMenuModule, BadgeModule, CommonModule,RippleModule],
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.css'
})
export class ContextMenuComponent {

  data = data;
  items = items;

  onContextMenu(event: Event) {
  }

  onHide() {
  }
}
