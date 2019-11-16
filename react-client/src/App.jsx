import React from 'react'
import axios from 'axios'
import Employees from './components/Employees.jsx'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
    }

    async componentDidMount() {
        let res = await axios.get('/employees')
        this.setState({ employees: res.data })
    }

    render() {
        return (
            <div>
                <Employees data={this.state.employees} />
            </div>
        )
    }
}

export default App