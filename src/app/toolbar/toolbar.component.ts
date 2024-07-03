import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AvatarModule,ButtonModule,ToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
