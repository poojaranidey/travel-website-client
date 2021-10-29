import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router';

import useFirebase from '../../hooks/useFirebase';
import "./Details.css"

const Details = () => {
    const { user, logOut } = useFirebase();
    const { serviceId } = useParams();
    console.log(serviceId);
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then((data) => setServices(data.find(x => x._id === serviceId)))


    }, []);
    console.log(services);
    // const { name, image, description, price } = services[0] || {};
    return (
        <div>

            <h1>{services.name}</h1>
            <img className="my-5 w-50" style={{ height: '440px' }} src={services.image} alt="" />
            <h5 className="mx-3  ">Details :{services.details}</h5>
            <h3>Total cost :{services.price}</h3>


            <div className="mb-5">

                <h1> Book your travel {user.displayName}</h1>

                <div
                    className="container education-bg-info pb-2  rounded-3" id="subscribe">


                    <p>Get updates on sales, specials and more
                    </p>

                    <Form.Label>Client's Name</Form.Label>
                    <Form.Control defaultValue={user.displayName}
                        disabled />
                    <br />
                    <Form.Label>Client's  Email</Form.Label>
                    <Form.Control defaultValue={user.email}
                        disabled />
                    <br />
                    <Form.Label>Client's address</Form.Label>
                    <Form.Control type="subject" placeholder="Enter your address" />
                    <br />
                    <Form.Label>Client's mobile number</Form.Label>
                    <Form.Control type="mobile-number" placeholder="Enter your number" />
                    <br />

                    <button className="Submit-now">Place your order</button>

                </div>
            </div>


        </div >
    );
};

export default Details;