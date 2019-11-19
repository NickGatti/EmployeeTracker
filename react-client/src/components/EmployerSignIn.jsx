require('babel-polyfill')
import React from 'react'
import axios from 'axios'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EmployerSignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            whoops: false
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async submit(e) {
        e.preventDefault()
        let res = await axios.post('/employer/login', {
            email: this.state.email,
            password: this.state.password
        })

        if (!res.data[0].success) {
            this.setState({
                whoops: true
            })
        } else {
            this.setState({
                whoops: false
            })
            localStorage.setItem('email', res.data[0].email)
            localStorage.setItem('password', res.data[0].password)
        }
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
                        <FormText>{!this.state.whoops ? '' : 'Invalid login'}</FormText>
                        <Label>email</Label>
                        <Input onChange={this.handleChange} type="text" name="email" />
                        <Label>password</Label>
                        <Input onChange={this.handleChange} type="password" name="password" />
                    </FormGroup>
                    <Button onClick={this.submit}>Login</Button>
                </Form>
            </div>
        )
    }
}

export default EmployerSignIn