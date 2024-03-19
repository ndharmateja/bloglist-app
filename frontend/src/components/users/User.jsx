import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const User = () => {
    const { id } = useParams();
    const user = useSelector(({ users }) => users.find((u) => u.id === id));

    if (!user) return null;

    const { name, blogs, username } = user;

    return (
        <>
            <h2>
                {name} - <em>@{username}</em>
            </h2>

            <h3>Added blogs</h3>
            {blogs.length === 0 ? (
                <div>No blogs added yet</div>
            ) : (
                <ul>
                    {blogs.map(({ id: blogId, title }) => (
                        <li key={blogId}>
                            <Link to={`/blogs/${blogId}`}>{title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default User;
