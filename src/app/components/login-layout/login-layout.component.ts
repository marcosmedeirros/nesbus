import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.scss'
})
export class LoginLayoutComponent {
  @Input() tituloLogin: string = '';
  @Input() entrarBotao: string = '';
  @Input() cadastrarBotao: string = '';
  @Input() validarbotao: boolean = true;
  @Output("submit") onsubmit = new EventEmitter();
  @Output("navigate") onnavigate = new EventEmitter();

  submit() {
    this.onsubmit.emit();
  }

  navigate() {
    this.onnavigate.emit();
  }
}
