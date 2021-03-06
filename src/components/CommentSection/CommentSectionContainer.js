// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
    const [comments] = useState(props.comments);
    console.log("commentsection props:", props);
    return (
        <div>
            {/* map through the comments data and return the Comment component */}
            {comments.map(comment => {
                return <Comment comment={comment} />;
            })}
            <CommentInput />
        </div>
    );
};

export default CommentSection;
