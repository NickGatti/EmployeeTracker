import React from 'react'
import axios from 'axios'

class EmployerSignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    async submit(e) {
        e.preventDefault()
        let res = await axios.post('/employer/login', {
            email: this.state.email,
            password: this.state.password,
            whoops: false
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
            <div>
                <form>
                    <div>{this.state.whoops ? '' : 'Invalid login'}</div>
                    <label>email</label>
                    <input onChange={this.handleChange} type="text" name="email" />
                    <label>password</label>
                    <input onChange={this.handleChange} type="password" name="password" />
                    <button onClick={this.submit}>Login</button>
                </form>
            </div>
        )
    }
}

export default EmployerSignIn