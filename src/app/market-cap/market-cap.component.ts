import { Component, ViewChild } from '@angular/core';
import { CoinmarketcapService } from './../coinmarketcap.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-market-cap',
  templateUrl: './market-cap.component.html',
  styleUrls: ['./market-cap.component.css']
})
export class MarketCapComponent {


  displayedColumns = [
    'rank',
    'name',
    'market_cap_usd',
    'price_usd',
    'volume_usd',
    'available_supply',
    'percent_change_1h',
    'percent_change_24h',
    'percent_change_7d'
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private coinmarketcapService: CoinmarketcapService) {
    coinmarketcapService.ticker(0).subscribe(res => {
      res = this.RemoveTheNumberFromAPropertyNameThatStartWithANumberBecauseABugInAngularMaterial(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public pageEvent(event) {
    console.log(event);
    this.coinmarketcapService.ticker(100 * event.pageIndex).subscribe(res => {
      res = this.RemoveTheNumberFromAPropertyNameThatStartWithANumberBecauseABugInAngularMaterial(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    });
  }

  public cssClassPercentage(value: any) {
    if (value >= 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  private RemoveTheNumberFromAPropertyNameThatStartWithANumberBecauseABugInAngularMaterial(res) {
    const jsonString = JSON.stringify(res).replace(/24h_volume_usd/g, "volume_usd");
    res = JSON.parse(jsonString);
    return res;
  }
}
