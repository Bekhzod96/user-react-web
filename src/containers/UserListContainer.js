import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions/userAction'
import UserList from '../components/UserLIst/UserList'
import { Spinner } from 'reactstrap'

class userListContainer extends Component {
    componentDidMount() {
        this.props.getUsers();
    }
    render() {
        const { users } = this.props;

        if (!users) {
            return <div>
                <Spinner color="primary" /></div>
        }
        return <UserList users={users} />
    }
}
const mapStateToProps = state => {
    return {
        users: state.getUsersReducer.users
    }
}
const mapDispatchToProps = {
    getUsers
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)(userListContainer);
