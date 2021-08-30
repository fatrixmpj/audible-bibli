import { createAction, props } from "@ngrx/store";
import { IBook } from "src/app/book";

export const loadBooksSuccess = createAction(
  '[Audiobook API] Load Book Success',
  props<{ books: IBook[] }>()
)

export const loadBooksFailure = createAction(
  '[Audiobook API] Load Book Failure',
  props<{ error: string }>()
)


export const newBooksSuccess = createAction(
  '[Audiobook API] New Book Success',
  props<any>()
)

export const newBooksFailure = createAction(
  '[Audiobook API] New Book Failure',
  props<{ error: string }>()
)
