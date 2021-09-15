import { Action, createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/models/post';
import { loadPostsSuccess } from '../../actions/post/post.actions';


export const postFeatureKey = 'post';

export interface State {
  posts: Post[];

}

export const initialState: State = {
  posts: [],
};


export const reducer = createReducer(
  initialState,
  on(loadPostsSuccess, (state, action) => {
    return {...state, posts: action.data}
  })
  
);

