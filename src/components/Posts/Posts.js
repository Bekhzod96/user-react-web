import React, { Component } from "react";
import PostCard from '../PostCard/PostCard';
import "./Posts.css";


class Posts extends Component {
    render() {
        return (
            <div className="Posts">{
                this.props.posts.payload &&
                this.props.posts.payload.map((post, index) => (
                    <PostCard
                        key={`PostCard${index}`}
                        title={post.title}
                        username={post.username}
                        image={post.media.path} />
                ))
            }
            </div>
        )
    }
}
export default Posts;