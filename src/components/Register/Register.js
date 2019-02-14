import React, { Component } from "react";
import { Button } from "reactstrap";
/**anchor tag  */
import { Link } from "react-router-dom";
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
        const { name } = e.target;

        this.setState({ [name]: e.target.value });

    }
    render() {
        const { email, password, username } = this.state;
        const { onRegister } = this.props;


        return (
            <div className="Register">
                <div className="Register__content">
                    <h2>Register</h2>
                    <form>
                        <div className="form-group">
                            <label>username</label>
                            <input
                                /** when it happens changes in input field we send data to OnInputChange function*/
                                onChange={this.onInputChange}
                                /** We attache form-control class from reactbootsrap */
                                className="form-control"
                                type="text"
                                /** name used to idetify key value onInputChange function */
                                name="username" />
                        </div>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="email"
                                name="email" />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="password"
                                name="password" />
                        </div>

                        <Button
                            onClick={() => onRegister(username, email, password)}
                            color="dark">Register</Button> <br />
                        <Link to="/login">already registrated</Link>
                    </form>
                </div>

            </div>
        )
    }
}

export default Register;