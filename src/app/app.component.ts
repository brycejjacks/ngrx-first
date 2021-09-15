import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { User } from './models/user';
import { AppState } from './store';
import { loadPosts, loadPostsSuccess } from './store/actions/post/post.actions';
import { loadUsers, loadUsersSuccess, sayCheese, selectUser } from './store/actions/user/user.actions';
import { postsSelector } from './store/selectors/post/post.selectors';
import { selectedUserSelector, userUsersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx0';
  users$: Observable<User[]>;
  posts$: Observable<Post[]>;
  selectedUser$: Observable<User | null>;
  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPosts());
    
    this.store.dispatch(selectUser({data: {id:99, name:'Nina'}}))
    this.store.dispatch(sayCheese({data: 'what it do cheddarJack'}));
    //this.store.dispatch(loadPostsSuccess({data: [new Post(0,99, 'posted with the homies', 'this a story about being posted')]}))

    this.users$ = this.store.select(userUsersSelector);
    this.selectedUser$ = this.store.select(selectedUserSelector);
    this.posts$ = this.store.select(postsSelector)
  }

  selectUser(user: User) {
    this.store.dispatch(selectUser({data: user}))
  }
}
