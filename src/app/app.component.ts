import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { AppState } from './store';
import { loadUsers, loadUsersSuccess, sayCheese, selectUser } from './store/actions/user/user.actions';
import { selectedUserSelector, userUsersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx0';
  users$: Observable<User[]>;
  selectedUser$: Observable<User | null>;
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadUsersSuccess({data: [{id:9, name: 'Billy'}]}));
    this.store.dispatch(selectUser({data: {id:9, name:'Nina'}}))
    this.store.dispatch(sayCheese({data: 'what it do cheddarJack'}));
    this.users$ = this.store.select(userUsersSelector);
    this.selectedUser$ = this.store.select(selectedUserSelector);
  }

  selectUser(user: User) {
    this.store.dispatch(selectUser({data: user}))
  }
}
