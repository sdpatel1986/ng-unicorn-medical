import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-display-weatherdata',
  templateUrl: './display-weatherdata.component.html',
  styleUrls: ['./display-weatherdata.component.scss']
})
export class DisplayWeatherdataComponent implements OnInit {
  @Input('weatherData') data: any;
  constructor() { }

  ngOnInit() {
    this.data.TempA = this.data["Temp. A."];
    this.data.FeuchteA = this.data["Feuchte A."];
    const temp = this.data.Datum.split('.');
    this.data.date = new Date(`${temp[1]}.${temp[0]}.${temp[2]}`);
  }

}
