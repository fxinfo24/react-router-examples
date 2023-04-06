import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CommentDetail = () => {
    const comment = useLoaderData('comment');
    console.log(comment);
    return (
        <div>
            <h2>Comment details Id </h2>
        </div>
    );
};

export default CommentDetail;