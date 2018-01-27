import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'add-crypto-dialog',
  templateUrl: './add-crypto-dialog.component.html',
  styleUrls: ['./add-crypto-dialog.component.css']
})
export class AddCryptoDialogComponent {

  serializedDate = new FormControl((new Date()).toISOString());

  constructor(public dialogRef: MatDialogRef<AddCryptoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
