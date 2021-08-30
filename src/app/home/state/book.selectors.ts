import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState } from "./book.reducer";

export interface State {
  books: BookState;
}

const getBookFeatureState = createFeatureSelector<BookState>('books');

export const getBookSelector = createSelector(
  getBookFeatureState,
  state => state.books
);

export const getErrorSelector = createSelector(
  getBookFeatureState,
  state => state.error
)
