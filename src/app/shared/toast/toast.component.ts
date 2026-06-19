import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from './toast.service';

// inizia il decoratore, @Component definisce un componente Angular, con selettore 'app-toast', template e stili associati
@Component({
  selector: 'app-toast',  // il template viene inserito negli HTML con questo tag 
  standalone: true,  // stabilisce che il componente è standalone, cioè non fa parte di un modulo Angular e usa le dipendenze dichiarate in imports
  imports: [CommonModule],  // importa il modulo CommonModule, che fornisce direttive comuni come @if e @for
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}
}