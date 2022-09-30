import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent{

  clientes = [
    {
      nome: 'Fernando',
      fone: '12345678',
      email: 'fernando@gmail.com'
    },
    {
      nome: 'Gabriela',
      fone: '87654321',
      email: 'gabriela@gmail.com'
    }
  ]
}
