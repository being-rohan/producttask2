import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snack:MatSnackBar) { }

  opensnack(msg:string){
    this._snack.open(msg,"Close",{
      duration:2500,
      verticalPosition:'top',
      horizontalPosition:'left'

    })
  }
}
