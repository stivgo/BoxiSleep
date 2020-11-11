import { Data } from './../models/data';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MattressService {

  info: Data[];
  infosingle: Data;

  constructor(private http:HttpClient) { }

  getMattress(){
    return this.http.get('http://localhost:3000/products');
  }
  getMattressID(id: string){
    return this.http.get('http://localhost:3000/products/' + id);
  }
  postSell(mensaje: object){
    return this.http.post('http://localhost:3000/sendemail', mensaje);
  }
}
