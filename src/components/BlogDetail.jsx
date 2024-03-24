import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  styled,
  IconButton,
} from "@mui/material";
import { useParams } from "react-router";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { fetchBlogById } from "../api";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogPostPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});

  const blogCount = useSelector((state) => state.blogs.blogsData).find(
    (blog) => blog.id === blogId
  ).views;

  const getBlog = async () => {
    try {
      const { data } = await fetchBlogById(blogId);
      setBlog(data);
    } catch (error) {
      console.error("Error fetching blog", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <Container>
      <Link to="/">
        <IconButton>
          <KeyboardBackspaceIcon />
          Back to Blogs
        </IconButton>
      </Link>
      <Grid container justifyContent="center" alignItems="center" p={2} gap={3}>
        <Grid item xs={9}>
          <Typography variant="body2" color="grey" display="inline">
            Posted on October 6th 2021
            <Typography display="inline" ml={2}>
              <IconButton size="small" disabled>
                <RemoveRedEyeOutlinedIcon />
              </IconButton>
              {blogCount ?? 0} views
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h1">{blog.Title}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">{blog.Article}</Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={blog.Image} alt="blog post" width="100%" height="450px" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h2" sx={{ fontWeight: "600" }} mb={2} mt={2}>
            This is a blog post headline
          </Typography>
          <Typography variant="body1">{blog.Article}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="body1">{blog.Article}</Typography>
        </Grid>
        <Grid item xs={9}>
          <img src={blog.Image} alt="blog post" width="100%" />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4" sx={{ fontWeight: "500" }} mb={2} mt={2}>
            This is a small blog post headline
          </Typography>
          <Typography variant="body1">{blog.Article}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Section>
            <Divider />
            <Typography variant="body2">{blog.Article}</Typography>
          </Section>
        </Grid>
        <Grid item xs={9} mt={3}>
          <Typography variant="body1">{blog.Article}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  marginTop: "20px",
}));

const Divider = styled(Box)(({ theme }) => ({
  backgroundColor: "#1e1b1b",
  width: "3px",
  height: "112px",
}));

export default BlogPostPage;
