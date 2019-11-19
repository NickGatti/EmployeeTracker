require('babel-polyfill')
import React from 'react'
import axios from 'axios'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddEmployee extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            rating: 0,
            submitted: false,
            error: false
        }
        this.handleFirstName = this.handleFirstName.bind(this)
        this.handleLastName = this.handleLastName.bind(this)
        this.handleRating = this.handleRating.bind(this)
        this.addEmployee = this.addEmployee.bind(this)
    }

    handleFirstName(e) {
        this.setState({ firstName: e.target.value })
    }

    handleLastName(e) {
        this.setState({ lastName: e.target.value })
    }

    handleRating(e) {
        this.setState({ rating: e.target.value })
    }

    async addEmployee(e) {
        e.preventDefault()

        const res = await axios.post('/employee', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            rating: this.state.rating,
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password')
        })

        if (!res.data.success) {
            this.setState({ submitted: true, error: true })
        } else {
            this.setState({ submitted: true, error: false })
        }
    }

    render() {
        return (
            <Form style={{ padding: "2em" }}>
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                        onChange={this.handleFirstName}
                        id="firstName" name="firstName" type="text" />
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        onChange={this.handleLastName}
                        id="lastName" name="lastName" type="text" />
                    <Label htmlFor="rating">Rating</Label>
                    <Input
                        onChange={this.handleRating}
                        id="rating" name="rating" type="number" />
                </FormGroup>
                <FormText>{this.state.submitted && !this.state.error ? "Thank you!" : this.state.submitted && this.state.error ? "Sorry error!" : ''}</FormText>
                <Button
                    onClick={this.addEmployee}
                >Submit</Button>
            </Form>
        )
    }
}

export default AddEmployee