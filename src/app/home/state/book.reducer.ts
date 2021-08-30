import { createReducer, on } from "@ngrx/store";
import { IBook } from "src/app/book";
import { BookApiActions } from "./actions";

export interface BookState {
  books: IBook[];
  error: string;
}

const initialState: BookState = {
  books: [],
  error: ''
}

export const bookReducer = createReducer<BookState>(
  initialState,
  on(BookApiActions.loadBooksSuccess, (state, action): BookState => {
    return {
      ...state,
      books: action.books,
      error: ''
    }
  }),

  on(BookApiActions.loadBooksFailure, (state, action): BookState => {
    return {
      ...state,
      books: [],
      error: action.error
    };
  })
)
