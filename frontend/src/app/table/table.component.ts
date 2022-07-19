import { Component, OnInit } from '@angular/core';
import { PorpertiesModel } from '../properties/properties.model';

import { TableService } from '../table.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  propertie: PorpertiesModel = new PorpertiesModel();
  propertiess: Array<any> = new Array();

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.findProperties();
  }

  deleteProperties(id: number) {
    this.tableService.deleteProperties(id).subscribe(propertie => {
      this.propertie = new PorpertiesModel();
      this.findProperties();
    });
  }

  updateProperties(propertie: PorpertiesModel) {
    let upPropertie = Object.assign(propertie);
   
    const endereco = document.getElementById('endereco') as HTMLInputElement | null;
    const titulo = document.getElementById('titulo') as HTMLInputElement | null;
    const type = document.getElementById('type') as HTMLInputElement | null;
    const bedrooms = document.getElementById('bedrooms') as HTMLInputElement | null;
    const suites = document.getElementById('suites') as HTMLInputElement | null;
    const description = document.getElementById('description') as HTMLInputElement | null;

    if (endereco != null && titulo != null && type != null
        && bedrooms != null && suites != null && description != null) {
      endereco.value = upPropertie.address
      titulo.value = upPropertie.title
      type.value = upPropertie.type
      bedrooms.value = upPropertie.bedrooms
      suites.value = upPropertie.suites
      description.value = upPropertie.description
    }
  }

  findProperties() {
    this.tableService.findProperties().subscribe(properties => {
      this.propertiess = properties;
    }, err => {
      console.log('Erro ao buscar as Propriedades', err);
    });
  }
}
