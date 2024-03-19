import { Link } from "react-router-dom";
import { FaComment, FaThumbsUp } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { likeBlog } from "../../reducers/blogsReducer";

const BlogsList = () => {
    const blogs = useSelector((store) => store.blogs);
    const dispatch = useDispatch();

    const padding = 10;
    const blogStyle = {
        paddingTop: padding,
        paddingLeft: padding,
        border: "solid",
        borderWidth: 1,
        marginBottom: 5,
        paddingBottom: padding,
        paddingRight: padding,
    };

    return blogs.map(({ id, title, likes, comments }) => (
        <div style={blogStyle} key={id}>
            <Link to={`/blogs/${id}`}>{title}</Link>
            <div
                onClick={() => dispatch(likeBlog(id))}
                style={{ float: "right", color: "black" }}
            >
                {likes} <FaThumbsUp />
                &nbsp; {comments.length} <FaComment />
            </div>
        </div>
    ));
};

export default BlogsList;
