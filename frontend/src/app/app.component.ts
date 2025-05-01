import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftPanelComponent } from "./left-panel/left-panel.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LeftPanelComponent]
})
export class AppComponent {
  title = 'frontend';
}
