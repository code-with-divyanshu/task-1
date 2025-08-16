import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postSlice";
import axios from "axios";
import "./CreatePost.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    try {
      await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
        userId: 1,
      });

      dispatch(addPost(newPost));

      setTitle("");
      setBody("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-post-container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit} className="create-post-form">
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows="5"
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
