import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  
   constructor(
    private _snackBar: MatSnackBar
  ) { }

  showAlert(msg: string, type: string) {
    this._snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: type
    })
  }
}
