import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [
  {id:1,nombre:'Andres',apellido:'Guzman',email:'profesor@bolsadeideas.com',createAt:'2021-12-11'},
  {id:2,nombre:'Mr.john',apellido:'Doe',email:'john.doe@gmail.com',createAt:'2017-11-05'},
  {id:3,nombre:'linus',apellido:'Torvalds',email:'linus.torvalds@gmail.com',createAt:'2017-11-12'},
  {id:4,nombre:'Karla',apellido:'Gomez',email:'karlag@gmail.com',createAt:'2017-11-12'},
  {id:5,nombre:'Cesar',apellido:'Aramayo',email:'cesarobituary@gmail.com',createAt:'2018-12-09'},
  {id:6,nombre:'Mr.T',apellido:'Baraku',email:'mario.baraku@gmail.com',createAt:'2017-11-06'},
  {id:7,nombre:'Mr.magu',apellido:'Magu',email:'mr.magu@gmail.com',createAt:'2017-11-31'},
  {id:8,nombre:'Luciana',apellido:'Salazar',email:'lulyZ@gmail.com',createAt:'2017-09-06'},
  {id:9,nombre:'Roberto',apellido:'Gomez Bolaño',email:'el.chavo8@gmail.com',createAt:'2017-08-06'},
  {id:10,nombre:'Ramon',apellido:'Diaz',email:'r.diaz@gmail.com',createAt:'1996-04-09'},
  {id:11,nombre:'El payaso',apellido:'Mala onda',email:'pmalaonda@gmail.com',createAt:'2010-11-05'},

  ];
  constructor() {}

  ngOnInit(): void {}
}
