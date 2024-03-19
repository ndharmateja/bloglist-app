const Comment = ({ content, createdAt }) => {
    console.log(createdAt);
    return <div>{content}</div>;
};

export default Comment;
