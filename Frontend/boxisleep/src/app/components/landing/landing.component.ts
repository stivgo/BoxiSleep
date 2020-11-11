import { Data } from './../../models/data';
import { MattressService } from './../../services/mattress.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  info: Data[];

  constructor(private service: MattressService) { }

  ngOnInit(): void {
    this.getMatrress();
  }

  getMatrress(){
    this.service.getMattress().subscribe(res => {
      this.service.info = res as Data[];
      this.info = this.service.info;
      console.log(this.info);
    });
  }

}
