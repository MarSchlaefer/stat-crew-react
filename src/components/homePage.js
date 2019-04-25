import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuth from '../hocs/withAuth';
import NavMenu from './navMenu';
import Modal from './modal';


class HomePage extends Component {

  state = {
    modal: false,
    modalType: ''
  }

    render() {
      return (
          <React.Fragment>
              <NavMenu handleModal={this.handleModal}/>
              <div>
                <h1>Recent Reports</h1>
              </div>
              <div>
                <h1>Top Players</h1>
              </div>
              <Modal modal={this.state.modal} modalType={this.state.modalType} handleModal={this.handleModal}/>  
          </React.Fragment>
      );
    }

    handleModal = (type) => {
      console.log(type)
      if (this.state.modal) {
        this.setState({
          modal: false,
          modalType: ''
        })
      } else {
        this.setState({
          modal: true,
          modalType: type
        })
      }

    }

  } // end of class



  const mapStateToProps = ({ usersReducer: { user: { username } } }) => ({
    username
  })
  
  export default withAuth(connect(mapStateToProps)(HomePage))
  