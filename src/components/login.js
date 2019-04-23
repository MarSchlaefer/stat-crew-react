import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from './actions/user';
import { Button, Form, Segment, Message } from 'semantic-ui-react';


class Login extends Component {
  state = { username: '', password: ''}

    render() {
      return (
        <div className="Login">
            <h1> Please Login or Signup</h1>
            <form>
              <label>
                Username <input type="text" name="name" />
              </label>
              <label>
                Password <input type="password" name="password" />
                </label>
            </form>
        </div>
      );
    }

    handleChange = (e, semanticInputData) => {
      this.setState({ [semanticInputData.name]: [semanticInputData.value] })
    }

    handleLoginSubmit = () => { // semantic preventsDefault for you
      this.props.loginUser(this.state.username, this.state.password)
      this.setState({ username: '', password: ''})
    }

  } //end of class
  
  export default Login;
  