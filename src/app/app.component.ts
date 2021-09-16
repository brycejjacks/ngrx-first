import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { User } from './models/user';
import { AppState } from './store';
import { loadPosts, loadPostsSuccess } from './store/actions/post/post.actions';
import { loadUsers, loadUsersSuccess, sayCheese, selectUser } from './store/actions/user/user.actions';
import { postWithUserSelector } from './store/selectors/combined/post-user.selectors';
import { postsSelector } from './store/selectors/post/post.selectors';
import { selectedUserSelector, usersSelector } from './store/selectors/user/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx0';
  login: FormGroup;
  users$: Observable<User[]>;
  posts$: Observable<Post[]>;
  selectedUser$: Observable<User | null>;
  postsWithUser$: Observable<{post: Post, user: User}[]>
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) {
    this.login = this.fb.group({
      name: ['',Validators.required],
      username: ['',Validators.compose([Validators.required, Validators.minLength(3),])],
    })

    this.store.dispatch(loadUsers());
    this.store.dispatch(loadPosts());
    
    this.store.dispatch(selectUser({data: {id:99, name:'Nina'}}))
    this.store.dispatch(sayCheese({data: 'what it do cheddarJack'}));
    //this.store.dispatch(loadPostsSuccess({data: [new Post(0,99, 'posted with the homies', 'this a story about being posted')]}))

    this.users$ = this.store.select(usersSelector);
    this.selectedUser$ = this.store.select(selectedUserSelector);
    this.posts$ = this.store.select(postsSelector)
    this.postsWithUser$ = this.store.select(postWithUserSelector);
  }

  selectUser(user: User) {
    this.store.dispatch(selectUser({data: user}))
  }

  findUser() {
    
  }
}
