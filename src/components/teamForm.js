import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

export default class TeamForm extends Component {
  render() {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Input fluid label='School' placeholder='School' required/>
                <Form.Input fluid label='Year/Season' placeholder='Year/Season' required/>
                <Form.Select fluid label='Sport' options={options} placeholder='Choose a sport' required/>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Input fluid label='Roster URL' placeholder='Roster URL' required/>
            </Form.Group>
        </Form>
    )
  }

} // end of class
