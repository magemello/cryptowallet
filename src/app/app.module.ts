import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoinmarketcapService } from './coinmarketcap.service';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule, MatPaginatorModule } from '@angular/material';
import {MatInputModule} from '@angular/material';
import { LogPipe } from './log.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LogPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatListModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CoinmarketcapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
