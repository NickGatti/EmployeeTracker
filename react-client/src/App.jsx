import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init: true
        }
    }

    render() {
        return (
            <div>React Loaded!</div>
        )
    }
}

export default App