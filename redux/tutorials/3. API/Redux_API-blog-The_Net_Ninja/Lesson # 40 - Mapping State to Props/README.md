7. Lesson # 40 - Mapping State to Props
   https://www.youtube.com/watch?v=CZ2qGtAnhoE&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=40

N: Explanation in the README.md file

EVERYTHING WILL TAKE PLACE IN Home.js

1.  Import soemthing:
    import { connect } from 'react-redux'

2.  Creta a map function, like this:

const mapStateToProps = (state) => {
return {
posts: state.posts
}
}
N: We get the object array (post) from the "rootReducer.js" where there is an initState.

3. Associate the conect() with the home function and the mapping function, like this:
   export default connect(mapStateToProps)(Home).

4. Change this.state to this.props (lin 10).
