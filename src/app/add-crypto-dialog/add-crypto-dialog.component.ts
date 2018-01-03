import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'add-crypto-dialog',
  templateUrl: 'add-crypto-dialog.component.html',
})
export class AddCryptoDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddCryptoDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
