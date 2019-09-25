import { Component, OnInit, Input } from '@angular/core';
import { SearchService} from '../../core/services/search.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input('feed') feed: any[];
  questions: Observable<any>;
  weatherData = false;

  constructor(
    private searchService: SearchService 
  ) { }

  ngOnInit() {
    if(this.feed.length > 1) {
      this.weatherData = true;
      this.questions = this.searchService.search(this.feed[0])
      .pipe(
        map((q: any) => q.items.slice(0, 5).map((x: any[]) => [x].concat(this.feed[1][Math.ceil(Math.random()*this.feed[1].length)]))),
      );
    } else {
      this.questions = this.searchService.search(this.feed[0])
      .pipe(map((x: any) => x.items.slice(0, 10)));
    }
  }
}
