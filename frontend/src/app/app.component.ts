import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftPanelComponent } from "./left-panel/left-panel.component";
import { RightPanelComponent } from "./right-panel/right-panel.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [LeftPanelComponent, RightPanelComponent]
})
export class AppComponent {
  title = 'frontend';
}
