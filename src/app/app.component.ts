import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/servicces/product.service';
import {  Users } from './shared/model/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'producttask2';
  productsarr!:Users[]
  constructor(private _product :ProductService){}
  ngOnInit(): void {
    this.productsarr=this._product.fetch()
   
  }
}
