import React from 'react';

const PostList = ({ posts }) => {
    console.log(posts);
    return (
        <div>
            <h3>Post List</h3>
            <ul>
                {posts.map(p => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;