import { Grid, Typography } from "@mui/material";
import bgImage from "../assets/images/Image.jpg";

const OurBlog = () => {
  const blogPosts = [
    {
      article: "Diagnose Car Problems If You Don't Know Much About Cars.",
      description:
        "We provide a full range of front end mechanical repairs for all makes and models of cars, no matter the cause. This includes, We provide a full range of front end mechanical.",
    },
  ];

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        height="400px"
        sx={{ backgroundImage: `url(${bgImage})` }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" sx={{ fontWeight: "700" }} color="white">
          Our Blog
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        container
        alignContent="center"
        gap={5}
        padding={10}
        bgcolor={"#1E1B1B"}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "700" }}
          color="white"
          fontWeight="700"
        >
          {blogPosts[0].article}
        </Typography>
        <Typography variant="body1" color="white" fontWeight="400">
          {blogPosts[0].description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OurBlog;
