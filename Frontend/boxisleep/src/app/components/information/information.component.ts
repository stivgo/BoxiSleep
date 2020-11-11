import { Data } from './../../models/data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Params } from '@angular/router';
import { MattressService } from './../../services/mattress.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  tipo: string;
  tipoSelect: object;

  constructor(private route:ActivatedRoute, private service: MattressService) { }

  ngOnInit(): void {
    this.getMatrress();
    console.log("Info",this.service.info);
    this.route.params.subscribe( params =>{
      this.tipo = params['tipo'];
  } );
    console.log(this.tipo);
  }



  getMatrress(){
    this.service.getMattress().subscribe(res => {
      this.service.info = res as Data[];
      console.log(res);
    });
  }

}
