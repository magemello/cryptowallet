import { Component, OnInit } from '@angular/core';
import { AddCryptoDialogComponent } from '../add-crypto-dialog/add-crypto-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public openDialog() {

    const dialogRef = this.dialog.open(AddCryptoDialogComponent, {
      width: '500px',
      height: '570px',
      data: {test: 'test'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
