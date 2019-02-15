import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPosts } from '../redux/actions/postsActions'
import Posts from '../components/Posts/Posts'
import { Spinner } from 'reactstrap'

class postContainer extends Component {
    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        const { posts } = this.props;

        if (!posts) {
            return <div>
                <Spinner color="primary" /></div>
        }
        return <Posts posts={posts} />
    }
}
const mapStateToProps = state => {
    return {
        posts: state.getPostsReducer.posts
    }
}
const mapDispatchToProps = {
    getPosts
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(postContainer);
