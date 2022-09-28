8. # 41 - Blog Detail Page
   https://www.youtube.com/watch?v=SoOTQW4-tYk&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=41

N: Explanation in the README.md file

- Inside Post.js:

1. Delete ComponentsDidMount and State.
2. Import connect ():
   import { connect } from 'react-redux'

3. Create the map function to find the item we are clicking, by matching the id, something like this:

const mapStateToProps = (state, ownProps) => {
let id = ownProps.match.params.post_id;
return {
post: state.posts.find(post => post.id === id)
}
}

4. Wrap the connect(), with the map() and the file function (Post), like this:
   export default connect(mapStateToProps)(Post)

5. Substitute "this.state.props" for "this.props.post"(line 9)

6. Substitute "this.state.props.title" for "this.props.post.tile" (line 11)

7. Substitute "this.state.props.body" for "this.props.post.body" (line 12)
