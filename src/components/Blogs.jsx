import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import { fetchBlogsThunk } from "./store/blogSlice";
import BlogCard from "./card";

export const Blogs = () => {
  const dispatch = useDispatch();
  const { blogsData, loading } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (!blogsData.length) {
      dispatch(fetchBlogsThunk());
    }
  }, []);

  // console.log("blogsData blogs.jsx", blogsData);

  return (
    <Container sx={{ marginBottom: "50px" }}>
      <Grid container spacing={3}>
        {blogsData.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <BlogCard blogData={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
