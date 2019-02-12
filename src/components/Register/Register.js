import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Register.css"


class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }

    // onEmailChange = e => {
    //     this.setState({ email: e.target.value })
    // }
    // onPasswordChange = e => {
    //     this.setState({ password: e.target.value })
    // }

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name);
        console.log([e.target.name]);
    }
    render() {
        return (
            <div className="Register">
                <div className="Register__content">
                    <h2>Register</h2>
                    <form>
                        <div className="form-group">
                            <label>username</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="email"
                                name="username" />
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="email"
                                name="username" />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="password"
                                name="password" />
                        </div>

                        <Button color="dark">register</Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Register;