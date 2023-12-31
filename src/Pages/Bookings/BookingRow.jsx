import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, img, service, customerName, price, email, date, status } = booking;
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-36 h-24">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{customerName}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {status === 'confirm' ? <button className='btn btn-xs btn-success text-white'>Confirmed</button> :
                    <button onClick={() => handleBookingConfirm(_id)} className='btn btn-xs btn-outline btn-primary'>Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;