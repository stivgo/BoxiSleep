import { Img } from './../../models/img';
import { Data } from './../../models/data';
import { Component, OnInit, Input } from '@angular/core';
import { MattressService } from './../../services/mattress.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() tipo: string;
  imgsrc: Img[];

  constructor(private service: MattressService) { }

  ngOnInit(): void {
    console.log(typeof this.tipo);
    this.getMatrress();
  }
  getMatrress(){
    this.service.getMattressID(this.tipo).subscribe(res => {
      this.service.infosingle = res as Data;
      console.log("Info slider",this.service.infosingle);
      this.imgsrc = this.service.infosingle.gallery;
      console.log(this.imgsrc);
    });
  }

}
