// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
    // set up state for the likes
    const [likes] = useState(props.dataFromPostsPage.likes);
    return (
        <div className="post-border">
            <PostHeader
                username={props.dataFromPostsPage.username}
                thumbnailUrl={props.dataFromPostsPage.thumbnailUrl}
            />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={props.dataFromPostsPage.imageUrl}
                />
            </div>
            <LikeSection dataFromPost={likes} />
            <CommentSection
                postId={props.dataFromPostsPage.imageUrl}
                comments={props.dataFromPostsPage.comments}
            />
        </div>
    );
};

export default Post;
