import { Component, Input, OnInit } from '@angular/core';
import { Users, userstat } from '../../model/interface';
import { ProductService } from '../../servicces/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() userobj!: Users
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
  }

  onlooking() {


    this._productService.update(this.userobj.userid, userstat.lookingjob)

  }
  inprocess() {
    this._productService.update(this.userobj.userid, userstat.Inprocess)

  }
  placed() {
    this._productService.update(this.userobj.userid, userstat.placed)

  }
}
