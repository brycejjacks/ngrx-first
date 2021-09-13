import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { loadUsersSuccess, sayCheese, selectUser } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State {
  users: User[]
  selectedUser: null | User
  hey: null | string

}

export const initialState: State = {
  users: [],
  selectedUser: null,
  hey: null,
};


export const reducer = createReducer<State>(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    return {...state, users: action.data}
  }),
  on(selectUser, (state, action) => {
    return {...state, selectedUser: action.data}
  }),
  on(sayCheese, (state, action) => {
    return {...state, hey: action.data }
  })
);

