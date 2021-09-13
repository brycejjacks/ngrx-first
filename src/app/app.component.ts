import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from './store/actions/user/user.actions';

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
    this.store.dispatch
    (loadUsers())
  }
}
