import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Comment.css'

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    const anything = useNavigate();

    const eventHandler = () => {
        anything(`/comment/${id}`);
    };
    return (
        <div className='comment'>
            <h2>Single comment ID: {id}</h2>
            <h4>{name}</h4>
            <h5>{email}</h5>
            {/* <p>{body}</p> */}
            <Link to={`/comment/${id}`}>Show comment detail</Link>
            {/* Using button; method 1 */}
            <Link to={`/comment/${id}`}><button>Detail comment</button></Link>
            {/* Method 2 */}
            <button onClick={eventHandler}>Detail useNavigate</button>
        </div>
    );
};

export default Comment;