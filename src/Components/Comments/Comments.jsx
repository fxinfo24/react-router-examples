import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Comments = () => {
    const comments = useLoaderData()
    // console.log(comments);
    return (
        <div>
            <h2>All comments together: {comments.length}</h2>
            <div>
                {
                    comments.map((comment) => <Comment
                    key = {comment.id}
                    comment={comment}
                    ></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;