import React from 'react'
import axios from 'axios'

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

        console.log(res.data)

        if (!res.data.success) {
            this.setState({ submitted: true, error: true })
        } else {
            this.setState({ submitted: true, error: false })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        onChange={this.handleFirstName}
                        id="firstName" name="firstName" type="text" />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        onChange={this.handleLastName}
                        id="lastName" name="lastName" type="text" />
                    <label htmlFor="rating">Rating</label>
                    <input
                        onChange={this.handleRating}
                        id="rating" name="rating" type="number" />
                    <button
                        onClick={this.addEmployee}
                    >Submit</button>
                </form>
                <p>{this.state.submitted && !this.state.error ? "Thank you!" : this.state.submitted && this.state.error ? "Sorry error!" : ''}</p>
            </div>
        )
    }
}

export default AddEmployee