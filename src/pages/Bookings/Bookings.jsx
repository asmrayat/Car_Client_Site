import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/booking?email=${user.email}`;
    useEffect(() => {
        fetch(url,{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBookings(data)
                }
                else{navigate('/');
                }
            })
    }, [url,navigate]);
     const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`,{
                method: 'DELETE'
        })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        const remaining = bookings.filter(booking => booking._id!==id);
                        setBookings(remaining);
                    }
                })
        }
    }
    const handleConfirm = id =>{
        fetch(`http://localhost:5000/booking/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                //upateState
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking=>booking._id===id);
                updated.status ='confirm'
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
            }
        })
    }
    return (
        <div>
            <h2>booking number{bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Cancel</th>
                            <th>Image</th>
                            <th>Service name</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleConfirm ={handleConfirm}
                            ></BookingRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;