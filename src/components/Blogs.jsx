import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import BlogCard from "./card";
import { fetchBlogs } from "../api";
import { Container } from "@mui/material";

export const Blogs = () => {
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
    getAllBlogs();
  }, []);

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
