import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user";
import { postsSelector } from "../post/post.selectors";
import { usersSelector } from "../user/user.selectors";

export const postWithUserSelector = createSelector(
    postsSelector,
    usersSelector,
    (posts,users) => {
        return posts.map(post => {
            return {post, user: users.find(user => user.id === post.userId) as User}
        })
    }
)