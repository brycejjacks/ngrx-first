import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as postFeature from 'src/app/store/reducers/post/post.reducer'

export const postFeatureSelector = createFeatureSelector<AppState, postFeature.State>
(postFeature.postFeatureKey);
 
export const postsSelector = createSelector(
    postFeatureSelector,
    (state) => state.posts
);

