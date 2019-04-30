import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

class GameForm extends Component {

    state = {
        gameTag: "",
        gameDate: "",
        sport: "",
        homeTeam: "",
        awayTeam: "",
        location: ""
    }

    render() {
        let {gameTag, gameDate, sport, homeTeam, awayTeam, location} = this.state
        console.log(this.state)
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input fluid name='gameTag' value={gameTag} label='Game Tag' placeholder='Game ID' required/>
                    <Form.Input fluid name='gameDate' value={gameDate} label='Game Date' placeholder='Choose a date' required/>
                    <Form.Select fluid name='sport' value={sport} label='Sport' options={options} placeholder='Choose a sport' required/>
                </Form.Group>
                <Form.Group widths='equal'>
                    <Form.Select fluid name='homeTeam' value={homeTeam} label='Home School' options={options} placeholder='Choose home team' required/>
                    <Form.Select fluid name='awayTeam' value={awayTeam} label='Visiting School' options={options} placeholder='Choose away team' required/>
                    <Form.Input fluid name='location' value={location} label='Location' placeholder='Location' required/>
                </Form.Group>
            </Form>
        )
    }

    handleChange = (e) => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createGame(this.state)
    }
} //end of class

const mapDispatchToProps = (dispatch) => {
    return {
        createGame: (newGameObj) => dispatch({type: 'CREATE_GAME', payload: newGameObj})
    }
}

export default connect(null, mapDispatchToProps)(GameForm)