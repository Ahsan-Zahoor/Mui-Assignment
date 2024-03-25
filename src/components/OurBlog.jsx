import { Grid, IconButton, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import bgImage from "../assets/images/Image.jpg";
import { Link } from "react-router-dom";

const OurBlog = () => {
  const theme = useTheme();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: `url(${bgImage})`,
          [theme.breakpoints.down("md")]: {
            height: "400px",
          },
          [theme.breakpoints.up("md")]: {
            height: "auto",
          },
        }}
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
          <Link to="/propertySearch">
            <IconButton sx={{ color: "white", cursor: "pointer" }}>
              <Typography variant="body1" color="white" display="inline">
                Go to Property Section
              </Typography>
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
            Diagnose Car Problems If You Don't Know Much About Cars.
          </Typography>
          <Typography variant="body1" color="white" fontWeight="400">
            We provide a full range of front end mechanical repairs for all
            makes and models of cars, no matter the cause. This includes, We
            provide a full range of front end mechanical.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurBlog;
