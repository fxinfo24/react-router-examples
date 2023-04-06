import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const frDetail = useLoaderData()
    // console.log(frDetail);
    return (
        <div>
            <h3>Details about this friend</h3>
            <h4>Name: {frDetail.name}</h4>
            <p>Phone: {frDetail.phone}</p>
            <p>Email: {frDetail.email}</p>
            <p>Address: {frDetail.address.city}</p>
            <div>
                {
                    // frDetail.map((iteratee) => {})
                }
            </div>
        </div>
    );
};

export default FriendDetails;