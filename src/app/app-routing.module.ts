import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MarketCapComponent } from './market-cap/market-cap.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: 'market',
    component: MarketCapComponent,
  },
  {
    path: 'wallet',
    component: WalletComponent,
  },
  {
    path: 'home',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
