require('babel-polyfill')
import React from 'react'
import axios from 'axios'

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
            <div>
                <form>
                    <label>Employer Name</label>
                    <input onChange={this.handleChange} type="text" name="name" />
                    <label>Employer Email</label>
                    <input onChange={this.handleChange} type="text" name="email" />
                    <label>Password</label>
                    <input onChange={this.handleChange} type="password" name="password"></input>
                    <button onClick={this.submit}>Sign up</button>
                </form>
            </div>
        )
    }
}

export default EmployerSignUp