import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name, phone, email, id} = friend;
    return (
        <div>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to = '/friend/:itemId'>Friends Detail 'not dynamic'</Link>
            <br />
            <Link to = {`/friend/${id}`}>Friends Detail 'Dynamic'</Link>
        </div>
    );
};

export default Friend;