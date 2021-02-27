import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  snackbarRef: MatSnackBarRef<SimpleSnackBar>;

  constructor(
    private readonly store: Store,
    private readonly snackbar: MatSnackBar
    ) {}

  removeFromReadingList(item) {
    this.snackbarRef = this.snackbar.open('Removed from Reading List', 'Undo', {
      duration: 3000
    });
    this.snackbarRef.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book : {id: item.bookId, ...item }}));
    })
    this.store.dispatch(removeFromReadingList({ item }));
  }
}
