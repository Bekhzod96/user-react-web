import React, { Component } from 'react';
import "./Header.css"
import PostModal from "../PostModel/PostModal";
import PlaceHolderImage from '../../assets/image-placeholder.svg';
class Header extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        }
    }
    onOpenModel = () => {
        this.setState({ isOpen: true });
    }
    onCloseModel = () => {
        this.setState({ isOpen: false });
    }
    render() {
        const { isOpen } = this.state;

        return (

            <div className="Header">
                <div className="Header__image"> <img className="Header__image__img" src={PlaceHolderImage} alt="something" /></div>
                <div className="Bootcamp">BootCamp</div>
                <div className="CreatePost"><button onClick={this.onOpenModel} type="button" className="btn btn-primary">Create Post</button>
                    {
                        isOpen && <PostModal onClose={this.onCloseModel} />
                    }

                </div>
            </div>
        )
    }

}

export default Header;