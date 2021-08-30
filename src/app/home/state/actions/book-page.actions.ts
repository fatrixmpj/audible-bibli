import { createAction, props } from "@ngrx/store";
import { IBook } from "src/app/book";


export const loadBooks = createAction(
  '[Audiobook Page] Load Books'
);

export const newBook = createAction(
  '[Audiobook Page] New Book',
  props<{ books: IBook[] }>()
);
