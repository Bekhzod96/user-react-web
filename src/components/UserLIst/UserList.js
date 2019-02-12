import React, { Component } from "react";
import UserCard from '../UserCard/UserCard';
import PlaceHolderImage from '../../assets/img.png';
import "./UserList.css"
const userList = [

    { title: "Jane", description: "girl", image: PlaceHolderImage },
    { title: "John", description: "dog walker", image: PlaceHolderImage },
    { title: "Name", description: "another", image: PlaceHolderImage },
    { title: "User", description: "unknown", image: PlaceHolderImage }

];
class UserList extends Component {
    render() {
        return (
            <div className="UserList">{
                userList.map((user, i) => (
                    <UserCard
                        key={i}
                        image={user.image}
                        title={user.title}
                        description={user.description}
                    />
                ))
            }
            </div>
        )
    }
}

export default UserList;