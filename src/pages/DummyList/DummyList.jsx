import { useSelector } from "react-redux";
import AllPosts from "../../components/AllPosts/AllPosts";
import CreatePost from "../../components/CreatePost/CreatePost";

const DummyList = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div style={{ padding: "20px" }}>
      {user && <CreatePost />}
      <AllPosts />
    </div>
  );
};

export default DummyList;
