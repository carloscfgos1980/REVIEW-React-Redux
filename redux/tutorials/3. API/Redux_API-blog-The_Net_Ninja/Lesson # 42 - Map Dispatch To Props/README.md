9. Lesson # 42 - Map Dispatch To Props
   https://www.youtube.com/watch?v=40pWMVMnftc&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=42

N: Explanation in the README.md file

1. INSIDE "Post.js". Create a map() to dispatch an action
   const mapDispatchToProps = (dispatch) => {
   return {
   deletePost: (id) => dispatch({type: 'DELETE_POST', id: id})
   }
   }

2. INSIDE "Post.js". Pasa the function "mapDispatchToProps" into connect()
   export default connect(mapStateToProps, mapDispatchToProps)(Post)

3. INSIDE "Post.js", Lin 11, just below the render. Type:
   console.log(this.props).

N: So We can see that function on the props.

4. INSIDE "Post.js". Create a button so we can attach an eventHandler (onClick). Lin 17-19.

5. INSIDE "Post.js". Create the handleClick function:
   handleClick = () => {
   this.props.deletePost(this.props.post.id);
   }

6. INSIDE "reducers/roorReducer.js".
   console.log(action);
   N: We can check that whenever we click in that button, we are going to receive an action.

7. INSIDE "reducers/roorReducer.js":
   Inside the "rootReducer" function:
   create a condiction (if) and then filter the array. Lin 13-20Ex:

   if(action.type === 'DELETE_POST'){
   let newPosts = state.posts.filter(post => {
   return post.id !== action.id
   });
   return {
   ...state,
   posts: newPosts
   }

8. INSIDE "Post.js". Redirect the page whenever we have erased the post:
   We need to use the history method inside the handleClic function. lin 8. Ex:
   this.props.history.push('/');
