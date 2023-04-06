import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const CommentDetail = () => {
    const commentDetail = useLoaderData('comment');
    // console.log(commentDetail);
    const {postId, id, name, email, body} = commentDetail;

    
    const goBack = useNavigate();

    const goBackHandler = () => {
        goBack(-1);

    };
    return (
        <div>
            <h2>Comment details Post Id {postId}</h2>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{body}</p>
            <button onClick={goBackHandler}>Go Back</button>
        </div>
    );
};

export default CommentDetail;