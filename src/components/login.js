import React, { Component } from 'react';

class Login extends Component {
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
  }
  
  export default Login;
  