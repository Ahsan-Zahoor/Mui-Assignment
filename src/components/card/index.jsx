import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
  IconButton,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useDispatch, useSelector } from "react-redux";
import { increaseViewCount } from "../store/blogSlice";

const ViewCount = styled("span")({
  display: "flex",
  justifyContent: "space-between",
});

export default function BlogCard({ blogData }) {
  const dispatch = useDispatch();

  const handleViewCount = () => {
    dispatch(increaseViewCount(blogData.id));
  };

  return (
    <Card sx={{ height: "400px" }}>
      <Link
        to={`/blog/${blogData.id}`}
        style={{ textDecoration: "none" }}
        onClick={handleViewCount}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={blogData.Image}
            alt={blogData.Title.slice(0, 10)}
          />
          <CardContent>
            <ViewCount>
              <Typography variant="body2" color="text.secondary">
                Posted on Oct 6 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <IconButton size="small" disabled>
                  <RemoveRedEyeOutlinedIcon />
                </IconButton>
                {blogData.views}
              </Typography>
            </ViewCount>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              {blogData.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blogData.Article}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
