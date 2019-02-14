import React, { Component } from "react";
import { Button } from "reactstrap";
/**anchor tag  */
import { Link } from "react-router-dom";
import "./Login.css"


class Login extends Component {
    constructor() {
        super();
        this.state = {
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
    }


    render() {
        const { email, password } = this.state;
        const { onLogin } = this.props;

        return (
            <div className="Login">
                <div className="Login__content">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label>email</label>
                            <input
                                onChange={this.onInputChange}
                                className="form-control"
                                type="email"
                                name="email"
                                value={email} />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                onChange={this.onInputChange}
                                value={password}
                            />
                        </div>

                        <Button
                            type="button"
                            onClick={() => onLogin(email, password)}
                            color="dark">Login</Button>

                        <div className="Login__content__registration"><Link to="/register">Registration</Link></div>
                    </form>

                </div>

            </div>
        )
    }
}

export default Login;