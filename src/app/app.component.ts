import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, FooterComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app1';
}
