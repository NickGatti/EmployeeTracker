import React from 'react'
import axios from 'axios'

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
            <div>React Loaded!</div>
        )
    }
}

export default App