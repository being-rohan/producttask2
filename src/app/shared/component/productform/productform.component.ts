import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../servicces/uuid.service';
import { userstat } from '../../model/interface';
import { ProductService } from '../../servicces/product.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  usersForm!: FormGroup
  constructor(private _uuid: UuidService,
    private _productSer: ProductService) { }

  ngOnInit(): void {
    this.createform()
  }
  createform() {
    this.usersForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      userdetails: new FormControl(null, [Validators.required])
    })
  }
  onadd() {
    if (this.usersForm.valid) {
      let obj = { ...this.usersForm.value, id: this._uuid.uuid(), userStstus: userstat.Inprocess }
      this._productSer.addusers(obj)
      this.usersForm.reset()

    }
  }


}
