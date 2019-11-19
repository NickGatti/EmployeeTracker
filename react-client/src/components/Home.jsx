require('babel-polyfill')
import React from 'react'

export default () => {
    return (
        <div style={{ padding: "2em" }}>
            <h1>Employee Tracker</h1>
            <div className="container">
                <br />
                <br />
                <br />
                <p>Welcome to Employee Tracker!</p>
                <p>Help build a history with employees, employers can add, delete and rate employees.</p>
                <p>Cloud sourced employee tracking.</p>
            </div>
        </div>
    )
}