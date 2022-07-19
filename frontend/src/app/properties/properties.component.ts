import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../properties.service';
import { PorpertiesModel } from './properties.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  propertie: PorpertiesModel = new PorpertiesModel();
  properties: Array<any> = new Array();

  constructor(private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.findProperties();
  }

  addProperties() {
    const endereco = document.getElementById('endereco') as HTMLInputElement | null;

    this.propertiesService.findProperties().subscribe(properties => {
      this.properties = properties;
    }, err => {
      console.log('Erro ao buscar as Propriedades', err);
    });

    let obj = this.properties;
    let idUpdate = 0;

    obj.forEach(element => {
      if (endereco?.value == element.address)
        idUpdate = 1;
    });

    if (idUpdate != 1 && this.propertie.address && this.propertie.address != '' && this.propertie.title != '' && this.propertie.description != '') {
      this.propertiesService.addProperties(this.propertie).subscribe(propertie => {
        this.propertie = new PorpertiesModel();
        this.findProperties();

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Propriedade inserida com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Erro ao inserir os dados, entre em contato com o suporte.',
        });
      });
    } else if (idUpdate == 1 && this.propertie.address && this.propertie.address != '' && this.propertie.title != '' && this.propertie.description != '') {
      this.propertiesService.updateProperties(this.propertie.id).subscribe(propertie => {
        this.propertie = new PorpertiesModel();
        this.findProperties();

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Propriedade atualizada com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha os campos obrigatórios!',
      });
    }
  }

  findProperties() {
    this.propertiesService.findProperties().subscribe(properties => {
      this.properties = properties;
    }, err => {
      console.log('Erro ao buscar as Propriedades', err);
    });
  }
}
