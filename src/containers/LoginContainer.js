import React, { Component } from "react";
import { login } from "../redux/actions/userAction";
import Login from "../components/Login/Login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

class LoginContainer extends Component {


    onLogin = (email, password) => {
        if (!email || !password) {
            alert("Please fill all fields!");
            return;
        }
        this.props.login(email, password);
    }
    render() {
        const { isLoggedIn } = this.props;

        return isLoggedIn ? (
            <Redirect to="/" />) :
            (<Login onLogin={this.onLogin} />)
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.loginReducer.isLoggedIn
    }
};

const mapDispatchToProps = {
    login
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
