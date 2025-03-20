import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSmartComponent } from "./core/navbar/navbar.smart.component";
import { FooterSmartComponent } from "./core/footer/footer.smart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarSmartComponent, FooterSmartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atelier-des-dragons';
}
