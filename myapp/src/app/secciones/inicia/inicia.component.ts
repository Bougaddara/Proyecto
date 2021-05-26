import { Component, OnInit } from '@angular/core';

import { IniciaService } from 'src/app/services/inicia.service';
import {Iniciainterface, } from '../../interfaces/iniciaInterface'

@Component({
  selector: 'app-inicia',
  templateUrl: './inicia.component.html',
  styleUrls: ['./inicia.component.scss']
})
export class IniciaComponent implements OnInit {
    constructor(private IniciaServoce: IniciaService){}
    private user:Iniciainterface ={
      email: "" ,
      password: ""
    };
  ngOnInit(){}
/*
  onInicia(){
    return this.IniciaServoce
    .Iniciauser (this.user.email, this.user.password)
    .subscribe (
      data => {
        console.log(data);
      },
       error => console.log(error)
      

    );
  }*/
}