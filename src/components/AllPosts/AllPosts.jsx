import usePostData from "../../customHook/usePostData";
import { useDispatch, useSelector } from "react-redux";
import "./AllPosts.css";
import { deletePost } from "../../redux/postSlice";

const AllPosts = () => {
  const apiPosts = usePostData();
  const userPosts = useSelector((state) => state.posts.userPosts);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const allPosts = [...userPosts, ...apiPosts];

  return (
    <>
      <h2 className="heading">All Posts</h2>
      <div className="posts-grid">
        {allPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>

            {user && userPosts.some((p) => p.id === post.id) && (
              <button
                className="delete-btn"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AllPosts;
