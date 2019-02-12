import React, { Component } from "react";
import PostCard from '../PostCard/PostCard';
import "./Posts.css";
import PlaceHolderImage from '../../assets/image-placeholder.svg';

const post = [
    { title: "First Title", description: "Desc", image: PlaceHolderImage },
    { title: "Second Title", description: "Second", image: PlaceHolderImage },
    { title: "Third Title", description: "Third", image: PlaceHolderImage },
];
class Posts extends Component {
    render() {
        return (

            <div className="Posts">{
                post.map((post, i) => (
                    <PostCard key={i} title={post.title} description={post.description} image={post.image} />
                ))
            }
            </div>
        )
    }
}
export default Posts;