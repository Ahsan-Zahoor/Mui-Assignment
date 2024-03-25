import { Grid, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bgImage from "../assets/images/Image.jpg";
import { Link } from "react-router-dom";

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
      <Grid item xs={12} md={6} container bgcolor={"#1E1B1B"}>
        <Grid item xs={12} sx={{ textAlign: "end" }}>
          <Link to="/">
            <IconButton sx={{ color: "white", cursor: "pointer" }}>
              Go to Property Section
              <ArrowForwardIcon />
            </IconButton>
          </Link>
        </Grid>
        <Grid item container xs={12} padding={10} alignContent="center" gap={5}>
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
    </Grid>
  );
};

export default OurBlog;
