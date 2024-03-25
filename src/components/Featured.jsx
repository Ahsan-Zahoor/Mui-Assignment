import { Grid, IconButton, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import featuredImage from "../assets/images/featured.jpg";

export const Featured = () => {
  return (
    <Grid
      container
      p={10}
      justifyContent="center"
      alignItems="center"
      bgcolor="gray"
    >
      <Grid item xs={12} md={9} sx={{ backgroundColor: "white" }} p={2}>
        <Grid container sx={{ backgroundColor: "white" }} p={3}>
          <Grid item xs={12} md={4}>
            <img src={featuredImage} alt="Featured img" />
          </Grid>
          <Grid item container xs={12} md={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="grey" display="inline">
                Posted on October 6th 2021
                <Typography display="inline" ml={2}>
                  <IconButton size="small" disabled>
                    <RemoveRedEyeOutlinedIcon />
                  </IconButton>
                  100 views
                </Typography>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} paddingRight={2} textAlign="end">
              <Typography
                variant="body2"
                color="#ff6433"
                sx={{ letterSpacing: "3.84px" }}
              >
                FEATURED
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h3" sx={{ fontWeight: "600" }}>
                Should I Buy a New Car or Lease a New Car in 2021?
              </Typography>
              <Typography variant="body2" mt={2}>
                We provide a full range of front end mechanical repairs for all
                makes and models of cars, no matter the cause. This includes, We
                provide a full range of front end mechanical.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" mt={2}>
                Read more
                <IconButton size="small">
                  <ArrowRightAltIcon />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
