import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();



    const { id } = useParams();
    console.log(id);
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then((data) => setServices(data))
    }, []);

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/myorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added sucessfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <div>
                <h1>
                    Book your travel information for {services.name}
                </h1>
            </div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={services.name} {...register("title")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input className="btn btn-warning" type="submit" />
                <Link to="/myorder">
                    <button className="btn btn-warning">
                        My-orders-details
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Shipping;