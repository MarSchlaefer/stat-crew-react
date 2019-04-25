import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'
import GameForm from './gameForm'
import TeamForm from './teamForm'


class ModalForm extends Component {
    
    state = {

    }
    
    render () {
        return (
            <Modal open={this.props.modal} closeIcon onClose={this.props.handleModal}>
                <Modal.Header>{this.props.modalType}</Modal.Header>
                <Modal.Content>
                    {this.renderModalContent()}
                </Modal.Content>
            </Modal>
        )
    }

    renderModalContent = () => {
        if (this.props.modalType === 'New Game') {
            return <GameForm />
        } else if (this.props.modalType === 'New Team') {
            return <TeamForm />
        } else if (this.props.modalType === '') {
            return null
        }
    }

} // end of class



export default ModalForm