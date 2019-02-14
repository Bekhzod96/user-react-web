import React, { Component } from "react";
import { register } from "../redux/actions/userAction";
import Register from "../components/Register/Register";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"


class RegisterContainer extends Component {


    onRegister = (username, email, password) => {
        if (!username || !email || !password) {
            return;
        }
        this.props.register(username, email, password);
    }
    render() {
        const { isRegistered } = this.props;
        /** This line of the code redirect path directly to register when we enter to /register which is opens Register Container  */
        return isRegistered ? (
            /**This line of the code checks if register true of false */
            <Redirect to="/login" />) :
            (<Register onRegister={this.onRegister} />)
    }
}


const mapStateToProps = (state) => {
    return {
        isRegistered: state.registerReducer.isRegistered
    }
};

const mapDispatchToProps = {
    register
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);