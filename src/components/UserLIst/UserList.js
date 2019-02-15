import React, { Component } from "react";
import UserCard from '../UserCard/UserCard';
import PlaceHolderImage from '../../assets/img.png';
import "./UserList.css"

class UserList extends Component {
    render() {
        return (
            <div className="UserList">{
                this.props.users &&
                this.props.users.map((user, index) => (
                    <UserCard
                        key={`userCard${index}`}
                        image={PlaceHolderImage}
                        username={user.username}
                        email={user.email}
                    />
                ))
            }
            </div>
        )
    }
}

export default UserList;