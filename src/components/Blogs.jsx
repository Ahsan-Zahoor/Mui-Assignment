import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { fetchBlogs } from "../api";
import { fetchBlogsThunk } from "./store/blogSlice";
import BlogCard from "./card";

export const Blogs = () => {
  const dispatch = useDispatch();
  const { blogsData, loading, error } = useSelector((state) => state.blogs);

  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const { data } = await fetchBlogs();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs", error);
    }
  };

  useEffect(() => {
    // getAllBlogs();
    dispatch(fetchBlogsThunk());
  }, []);

  console.log("blogsData ", blogsData);

  return (
    <Container sx={{ marginBottom: "50px" }}>
      <Grid container spacing={3}>
        {blogs.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <BlogCard blogData={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
