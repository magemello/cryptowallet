import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoinmarketcapService {

  BASE_URL = 'https://api.coinmarketcap.com/v1';

  constructor(private http: HttpClient) {
  }

  public ticker(start: number): Observable<any> {

    return this.http.get(this.BASE_URL + '/ticker/?start=' + start + '&limit=100',
      {
        headers: new HttpHeaders()
          .append('Accept', 'application/json')
      }
    );

    // return this.http.get('/assets/test.json',
    //   {
    //     headers: new HttpHeaders()
    //       .append('Accept', 'application/json')
    //   }
    // );
  }

}
