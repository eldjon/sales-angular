import { Component } from '@angular/core';
import {TomatoSaleRecord} from './shared/tomato.component';
import {TomatoService} from './services/tomato.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TomatoService]
})
export class AppComponent{

  constructor(private service: TomatoService){
  }

  title = 'Tomatoes Sales';
  numberOfRecords: number;
  tomatoes: TomatoSaleRecord[];

  refreshData():void {
    console.log('asdfasdf');
    this.service.getRecords(this.numberOfRecords)
                .subscribe(tomatoes => this.tomatoes=tomatoes)
  }
}
