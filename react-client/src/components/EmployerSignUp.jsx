require('babel-polyfill')
import React from 'react'
import axios from 'axios'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EmployerSignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async submit(e) {
        e.preventDefault()
        let res = axios.post('http://localhost:8000/employer/create', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div style={{ padding: "2em" }} className="container">
                <Form className="col-6">
                    <FormGroup>
                        <Label>Employer Name</Label>
                        <Input onChange={this.handleChange} type="text" name="name" />
                        <Label>Employer Email</Label>
                        <Input onChange={this.handleChange} type="text" name="email" />
                        <Label>Password</Label>
                        <Input onChange={this.handleChange} type="password" name="password"></Input>
                    </FormGroup>
                    <Button onClick={this.submit}>Sign up</Button>
                </Form>
            </div>
        )
    }
}

export default EmployerSignUp