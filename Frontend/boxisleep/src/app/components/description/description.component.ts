import { Medidas } from './../../models/medidas';
import { Firmeza } from './../../models/firmeza';
import { Data } from './../../models/data';
import { Component, OnInit, Input, NgModule} from '@angular/core';
import { MattressService } from './../../services/mattress.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input() tipo: string;
  firmeza: Firmeza;
  medidas: Medidas;
  description: string;
  name: string;
  price: string;

  constructor(private service: MattressService) { }

  ngOnInit(): void {
    this.getMatrress();
  }

  getMatrress(){
    this.service.getMattressID(this.tipo).subscribe(res => {
      this.service.infosingle = res as Data;
      this.firmeza = this.service.infosingle.dimensionsMap.Firmeza;
      this.medidas = this.service.infosingle.dimensionsMap.Medidas;
      this.description = this.service.infosingle.metaTagDescription;
      this.name = this.service.infosingle.name;
      this.price = this.service.infosingle.skus[0].basePriceFormatted;
      console.log(this.medidas);
    });
  }
  buyMatrress(){
    let mensaje: string;
    mensaje = 'Se ha realizado la compra de ' + this.name + ' por un valor de ' + this.price;
    console.log(mensaje);
    let object: object;
    object = {
      "mensaje": mensaje,
    };
    this.service.postSell(object).subscribe(res =>{
      console.log(res);
    });

  }

}
