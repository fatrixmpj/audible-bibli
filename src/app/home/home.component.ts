import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IBook } from '../book';
import { BookPageActions } from './state/actions';
import { getBookSelector } from './state/book.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books$: Observable<IBook[]>;
  audiobooks: IBook;
  bookTable;

  constructor(private store: Store) { }

  ngOnInit() {

    this.books$ = this.store.select(getBookSelector)

  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];






}
