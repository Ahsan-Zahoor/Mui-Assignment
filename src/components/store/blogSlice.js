import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBlogs } from "../../api";

export const fetchBlogsThunk = createAsyncThunk(
  "blogs/fetchBlogsData",
  async () => {
    try {
      const response = await fetchBlogs();
      return response.data; // Assuming the API response has a "data" property
    } catch (error) {
      return Promise.reject(error); // Reject the promise with the error
    }
  }
);

export const BlogsStore = createSlice({
  name: "blogs",
  initialState: {
    blogsData: [],
    loading: false,
    error: null,
  },
  reducers: {
    setBlogs: (state, data) => {
      state.blogsData = data.payload;
    },
    increaseViewCount: (state, action) => {
      const id = action.payload;
      const tempBlogs = state.blogsData.map((blog) =>
        blog.id == id ? { ...blog, views: blog.views + 1 } : blog
      );
      state.blogsData = tempBlogs;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsThunk.pending, (state) => {
        state.loading = true; // Set loading to true during the fetch process
        state.error = null; // Reset any previous errors
      })
      .addCase(fetchBlogsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.blogsData = action.payload.map((blog) => ({ ...blog, views: 0 }));
      })
      .addCase(fetchBlogsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store the error message
      });
  },
});

export const { setBlogs, increaseViewCount } = BlogsStore.actions;

export default BlogsStore.reducer;
