import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  estaTemplateInicial = false;

  mudarTemplate() {
    this.estaTemplateInicial = !this.estaTemplateInicial;
  }
}
