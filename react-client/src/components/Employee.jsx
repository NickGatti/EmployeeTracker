require('babel-polyfill')
import React from 'react'
import axios from 'axios'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default ({ employee, updateList }) => {
    const upVote = async () => {
        const res = await axios.put('/employee/upvote', { personToUpVote: employee._id, rating: employee.rating || 0 })
        updateList()
    }

    const downVote = async () => {
        const res = await axios.put('/employee/downvote', { personToDownVote: employee._id, rating: employee.rating || 0 })
        updateList()
    }

    const deleteUser = async () => {
        const res = await axios.delete('/employee/delete', {
            data: { personToDelete: employee._id }
        })
        updateList()
    }

    return (
        <div className="col-4">
            <Card>
                <CardBody>
                    <CardTitle>{employee.firstName} {employee.lastName}</CardTitle>
                    <CardText>Rating: {employee.rating}</CardText>
                    <CardBody className="row">
                        <div className="col"><Button onClick={upVote}>Upvote</Button> <Button onClick={downVote}>Downvote</Button> <Button onClick={deleteUser} color="danger">Delete</Button></div>
                    </CardBody>
                </CardBody>
            </Card>
        </div>
    )
}