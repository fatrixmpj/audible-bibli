import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { BookService } from "../books.service";
import { BookApiActions, BookPageActions } from "./actions";

@Injectable()
export class BookEffects {

  constructor(private actions$: Actions, private bookService: BookService) {}

  loadBooks$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookPageActions.loadBooks),
        mergeMap(() => this.bookService.getBooks()
          .pipe(
            map(books => BookApiActions.loadBooksSuccess( { books })),
            catchError(error => of(BookApiActions.loadBooksFailure({ error })))
          )
        )
      );
  });

  // TODO
  newBook$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(BookPageActions.newBook),
        mergeMap(action => this.bookService.newBook(action.books)
          .pipe(
            map(response => BookApiActions.newBooksSuccess(response)),
            catchError(error => of(BookApiActions.newBooksFailure({ error })))
          )
        )
      );
  });

}
