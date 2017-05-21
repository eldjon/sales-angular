import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {TomatoSaleRecord} from '../shared/tomato.component';


@Injectable()
export class TomatoService {

  REST_ENDPOINT = 'http://localhost:8080/sales/tomatoes/data';

  constructor(private http: Http) {
  }

  getRecords(numberOfRecords: number): Observable<TomatoSaleRecord[]>{

    console.log('Calling rest endpoint');

    var endpoint:string;

    if(numberOfRecords>0){
      endpoint = this.REST_ENDPOINT + '?size=' + numberOfRecords;
    } else {
      endpoint = this.REST_ENDPOINT;
    }
    return this.http.get(endpoint).map( (res:Response)=> <TomatoSaleRecord[]>res.json() )
  }

}
