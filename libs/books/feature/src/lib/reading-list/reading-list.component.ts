import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, setBookAsFinished } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = <Observable<ReadingListItem[]>> this.store.select(getReadingList);

  constructor(private readonly store: Store) {}

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : 'Date unavailable';
  }

  removeFromReadingList(item: ReadingListItem) {
    this.store.dispatch(removeFromReadingList({ item }));
  }
  
  setAsFinished(item: ReadingListItem) {
    this.store.dispatch(setBookAsFinished({ item }));
  }
}
