import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserHandle = ({ username }) => {
    const userId = useSelector(({ users }) => {
        const user = users.find((u) => u.username === username);
        return user?.id;
    });

    if (!userId) return null;

    return (
        <Link to={`/users/${userId}`}>
            @<em>{username}</em>
        </Link>
    );
};

export default UserHandle;
