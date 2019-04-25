import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

export default class GameForm extends Component {
  render() {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Game Tag' placeholder='Game ID' required/>
                <Form.Input fluid label='Game Date' placeholder='Choose a date' required/>
                <Form.Select fluid label='Sport' options={options} placeholder='Choose a sport' required/>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Select fluid label='Home School' options={options} placeholder='Choose home team' required/>
                <Form.Select fluid label='Visiting School' options={options} placeholder='Choose away team' required/>
                <Form.Input fluid label='Location' placeholder='Location' required/>
            </Form.Group>
        </Form>
    )
  }
}
