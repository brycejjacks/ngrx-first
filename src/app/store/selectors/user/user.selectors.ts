import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as userFeature from 'src/app/store/reducers/user/user.reducer'

export const userFeatureSelector = createFeatureSelector<AppState, userFeature.State>
(userFeature.userFeatureKey);
 
export const usersSelector = createSelector(
    userFeatureSelector,
    (state) => state.users
);

export const selectedUserSelector = createSelector(
    userFeatureSelector,
    (state) => state.selectedUser
);