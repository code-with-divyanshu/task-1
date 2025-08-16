import { useEffect, useState } from "react";
import axios from "axios";

const usePostData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/posts")
      .then((res) => {
        setData(res.data.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return data;
};

export default usePostData;
