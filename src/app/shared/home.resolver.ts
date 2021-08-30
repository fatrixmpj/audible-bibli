import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { State, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { IBook } from "../book";
import { BookPageActions } from "../home/state/actions";

@Injectable()
export class HomeResolver implements Resolve<any> {
  constructor(private store: Store<IBook>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    if (route.data) {
      return this.store.dispatch(BookPageActions.loadBooks())
    }
  }
}
