import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container } from "@mui/material";
import { fetchBlogsThunk } from "./store/blogSlice";
import BlogCard from "./card";

export const Blogs = () => {
  const dispatch = useDispatch();
  const { blogsData, loading } = useSelector((state) => state.blogs);

  const [blogsPaginate, setBlogsPaginate] = useState([]);
  const [paginateCount, setPaginateCount] = useState(6);

  useEffect(() => {
    if (!blogsData.length) {
      dispatch(fetchBlogsThunk());
    }
  }, []);

  useEffect(() => {
    if (blogsData.length) {
      setBlogsPaginate(blogsData.slice(0, paginateCount));
    }
  }, [paginateCount]);

  return (
    <Container sx={{ marginBottom: "50px" }}>
      <Grid container spacing={3}>
        {blogsPaginate.map((blog, index) => (
          <Grid item xs={12} md={4} key={index}>
            <BlogCard blogData={blog} />
          </Grid>
        ))}
        {paginateCount < blogsData.length && (
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", color: "white" }}
              onClick={() => setPaginateCount((prev) => prev + 6)}
            >
              Load More
            </Button>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
