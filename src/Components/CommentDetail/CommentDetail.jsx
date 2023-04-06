import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentDetail = () => {
    const commentDetail = useLoaderData()
    console.log(commentDetail);
    return (
        <div>
            <h2>Comment details here</h2>
            
        </div>
    );
};

export default CommentDetail;