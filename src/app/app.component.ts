import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, sayCheese, selectUser } from './store/actions/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx0';

  constructor(
    private store: Store
  ) {
    this.store.dispatch(loadUsersSuccess({data: [{id:9, name: 'Billy'}]}));
    this.store.dispatch(selectUser({data: {id:9, name:'Nina'}}))
    this.store.dispatch(sayCheese({data: 'what it do Jack'}));
  }
}
