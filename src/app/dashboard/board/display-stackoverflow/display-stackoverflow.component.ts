import { Component, OnInit, Input } from '@angular/core';
import { ISearchResultItem } from '../../../core/services/search.service'

@Component({
  selector: 'app-display-stackoverflow',
  templateUrl: './display-stackoverflow.component.html',
  styleUrls: ['./display-stackoverflow.component.scss']
})
export class DisplayStackoverflowComponent implements OnInit {
  @Input('question') data: ISearchResultItem[]; 
  constructor() { }

  ngOnInit() {
  }

  displayDate(activTime, editTime, askedTime) {
    const sanitizedValue = [activTime, editTime, askedTime].map(x => typeof x === "number" ? x : 0)
    const mostRecent = Math.max(...sanitizedValue);
    const since = (new Date().getTime() - (mostRecent * 1000)) / 1000;
    let display = '';
    let temp = since;
    if(temp > 60) {
      temp = temp / 60;
      if(temp > 60 ) {
        temp = temp / 60;
        if(temp > 24) {
          temp = temp / 24;
          display = `${Math.round(temp)} days ago`
        } else {
          display = `${Math.round(temp)} hours ago`
        }
      } else {
        display = `${Math.round(temp)} minutes ago`  
      }
    } else {
      display = `${Math.round(temp)} seconds ago`
    }

    if (mostRecent === activTime) {
      display = `answered ${display}`
    } else if (mostRecent ===  editTime) {
      display = `modified ${display}`
    } else {
      display = `asked ${display}`
    }

    return display;
  }
}
