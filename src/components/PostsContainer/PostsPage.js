//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";

const PostsPage = () => {
    const [data, setData] = useState(dummyData);
    return (
        <div className="posts-container-wrapper">
            {/* map through data here to return a Post and pass data as props to Post */}
            {data.map(post => (
                <Post key={post.imageUrl} dataFromPostsPage={post} />
            ))}
        </div>
    );
};

export default PostsPage;
