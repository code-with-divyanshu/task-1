import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: { userPosts: [] },
  reducers: {
    addPost: (state, action) => {
      state.userPosts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.userPosts = state.userPosts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
