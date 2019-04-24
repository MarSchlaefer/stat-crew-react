import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import { loginUser } from '../actions/user';
import { Button, Form, Segment, Message } from 'semantic-ui-react';


class Login extends Component {

  state = { username: '', password: '' }

    render() {
      return this.props.loggedIn ? (
        <Redirect to='/home'/>
        ) : (
        <Segment>
          <Form 
            onSubmit={this.handleLoginSubmit}
            size="mini"
            key="mini"
            loading={this.props.authenticatingUser}
            error={this.props.failedLogin}
          >
            <Message error header={this.props.failedLogin ? this.props.error : null}/>
            <Form.Group widths="equal">
              <Form.Input 
                label="username"
                placeholder="username"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <Form.Input 
                label="password"
                placeholder="password"
                name="password"
                type="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Group>
            <Button type="submit">
              Login
            </Button>
          </Form>
        </Segment>
      );
    }

    handleChange = (e, semanticInputData) => {
      // console.log(this.state.username, this.state.password)
      this.setState({ [semanticInputData.name]: semanticInputData.value })
    }

    handleLoginSubmit = () => { // semantic preventsDefault for you
      this.props.loginUser(this.state.username, this.state.password) // comes from mapDispatchToProps
      this.setState({ username: '', password: ''}) // resets form to initial state
    }

  } //end of class

  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     loginUser: (username, password) => dispatch(loginUser(username, password))
  //   }
  // }

  const mapStateToProps = ({usersReducer: { authenticatingUser, failedLogin, error, loggedIn }}) => ({
    authenticatingUser,
    failedLogin,
    error,
    loggedIn
  })

  // const connectedToReduxHOC = connect(mapStateToProps, mapDispatchToProps)
  // const connectedToReduxLoginForm = connectedToReduxHOC(Login)
  // export default connectedToReduxLoginForm

  // This abbreviates the above three lines.
  export default withRouter(connect(mapStateToProps, { loginUser })(Login));
  