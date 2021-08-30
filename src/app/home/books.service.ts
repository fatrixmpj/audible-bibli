import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { IBook } from "src/app/book";
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private localUrl = 'assets/audiobooks/audiobooks.json'
  private productUrl = 'http://localhost:7071/api/getBooks'
  private productUrl2 = 'http://localhost:7071/api/newBook'

  public bookServiceError;

  constructor(private http: HttpClient) {}

  //TODO sort by series backend
  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.productUrl, {responseType: 'json'}).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  newBook(book) {
    const headers = new HttpHeaders({'Content-Type' : 'application/json'});
    const options = {headers};
    return this.http.post<IBook[]>(this.productUrl2, {book}, options).pipe(
      map(response => console.log('newBook: ' + JSON.stringify(response))),
      catchError(this.handleError)
    )
  }



  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';

    this.bookServiceError = errorMessage;

    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    // console.error(errorMessage);
    return throwError(errorMessage);
  }
}
