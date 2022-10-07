10. Lesson # 43 - Action Creators
    https://www.youtube.com/watch?v=sY1mPVaUYds&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=43

N: Explanation in the README.md file

1. Inside src folder: Create another folder named "actions"

2. Inside "actions": create a file name "postActions.js"

3. Inside "actions": create a function that it will be the action will do, in this case delete item, like this:

export const deletePost = (id) => {
return {
type: 'DELETE_POST',
id
}
}
// here "id" is really "id:id" nevertheless in JXS language, that is implicit.

4. Inside "Post.js": Import the function "deletePost". to obtein the path is a bit complicated because we need to access the parent (up directory) so we need to use "..". lin 3
   import { deletePost } from '../actions/postActions'

5. Call the function inside the dispatch. lin 44:
   deletePost: (id) => dispatch(deletePost(id))
