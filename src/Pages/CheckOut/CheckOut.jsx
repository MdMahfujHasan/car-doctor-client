import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryButton from '../Shared/CommonStyle/PrimaryButton';
import SectionTitle from '../Shared/CommonStyle/SectionTitle';
import { AuthContext } from '../../providers/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, title, price, img } = service;

    const handleConfirmOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id: _id,
            price
        }
        // console.log(order);
        fetch('https://car-doctor-server-pi-seven.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    alert('Service booked successfully!');
                }
            })
    }
    return (
        <div>
            <span className='text-center'><SectionTitle>Book Service</SectionTitle></span>
            <form onSubmit={handleConfirmOrder}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter service name"
                            defaultValue={user?.displayName}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            name='date'
                            placeholder="Pick a date"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email"
                            defaultValue={user?.email}
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={'$' + price}
                            className="input input-bordered text-slate-600 font-semibold"
                            readOnly
                        />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <PrimaryButton>
                        <input type="submit" value="Confirm Order" />
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;