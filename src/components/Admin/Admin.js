import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';

import { FaCheck, FaTrash } from "react-icons/fa";
import useAuth from '../../hooks/useAuth';


const Admin = () => {
    const { user } = useAuth()

    const [all, setAll] = useState([])
    const [allEvent, setAllEvent] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/myorder')
            .then(res => res.json())
            .then(data => setAll(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllEvent(data))
    }, [])


    const deleteBtn = id => {
        fetch(`http://localhost:5000/myorder/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Delete successfull')
                    const newAll = all.filter(b => b._id !== id)
                    setAll(newAll)
                }
            })
    }


    const deleteEvent = id => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('Event Delete successfull')
                    const newAllEvent = allEvent.filter(c => c._id !== id)
                    setAllEvent(newAllEvent)
                }
            })
    }
    return (
        <div>
            {
                user.email && <Container>
                    <div>
                        <h3 className="text-center py-5">Traveller Management</h3>
                        <Row xs={3} md={5} className="g-4">
                            <p className="display text-center">Event</p>
                            <p className="text-center">Traveller</p>
                            <p className="display text-center">Email</p>
                            <p className=" text-center">Status</p>
                            <p className="text-center">Action</p>
                        </Row>
                        {
                            all.map(a => <Row xs={3} md={5} className="g-4" key={a._id}>
                                <p className="display text-center">{a.title}</p>
                                <p className="text-center">{a.name}</p>
                                <p className="display text-center">{a.email}</p>
                                <p className=" text-center">{a?.description}</p>
                                <p className="text-center"><FaCheck className="mx-2" /><FaTrash onClick={() => deleteBtn(a._id)} className="mx-2" /></p>
                            </Row>)
                        }
                    </div>


                    <div>
                        <h3 className="text-center py-5">Event Management</h3>
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <Table className="customWidth" striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Event Title</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    {
                                        allEvent.map(b => <tbody key={b._id}>
                                            <tr>
                                                <td>{b.name}</td>
                                                <td><FaTrash onClick={() => deleteEvent(b._id)} className="mx-2" /></td>
                                            </tr>
                                        </tbody>)
                                    }
                                </Table>
                            </div>
                        </div>
                    </div>
                </Container>
            }
        </div>
    );
};

export default Admin;