import React from 'react';
import { Link } from 'react-router-dom';
import './Comment.css'

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;
    return (
        <div className='comment'>
            <h2>Single comment ID: {id}</h2>
            <h4>{name}</h4>
            <h5>{email}</h5>
            {/* <p>{body}</p> */}
            <Link to={`/comment/${id}`}>Show comment detail</Link>
            <button>Detail</button>
        </div>
    );
};

export default Comment;