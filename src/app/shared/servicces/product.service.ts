import { Injectable } from '@angular/core';
import { Users, userstat } from '../model/interface';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  userArr: Users[] = [
    {
      username: "rohan panchal",
      userdetails: "iam full stack Developer",
      userid: "123",
      userStstus: userstat.lookingjob
    },
    {
      username: "nikhil singe",
      userdetails: "iam full stack Developer",
      userid: "1233",
      userStstus: userstat.Inprocess
    },
    {
      username: "adi waghmare",
      userdetails: "iam full stack Developer",
      userid: "12344",
      userStstus: userstat.placed
    },

  ]

  constructor(private _snackbar: SnackBarService) { }
  fetch() {
    return this.userArr
  }

  addusers(obj: Users) {
    this.userArr.push(obj)
    this._snackbar.opensnack(`${obj.username} is added!`)


  }
  update(id: string, updatename: userstat) {
    for (const obj of this.userArr) {
      if (obj.userid === id) {
        let old = obj.userStstus
        obj.userStstus = updatename
        this._snackbar.opensnack(` the product status is ${old} is changed to ${updatename}`)
      }

    }

  }
}
