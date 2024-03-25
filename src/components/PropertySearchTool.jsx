import React, { useEffect, useMemo, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BasicTable from "./table/basicTable";
import SelectionTable from "./table/selectionTable";
import { basedOnTypes, setSelected } from "./store/propertyDataSlice";

const PropertySearchTool = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const propertyData = useSelector((state) => state.property.propertyTypeData);
  const options = ["All", "Flat", "Terraced house", "Semi-detached"];

  const [selectedOption, setSelectedOptions] = useState("All");
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    return propertyData.filter((ele) =>
      ele.address.toLowerCase().includes(query.toLowerCase())
    );
  }, [propertyData, query]);

  useEffect(() => {
    dispatch(basedOnTypes(selectedOption));
    dispatch(setSelected([]));
  }, [selectedOption]);

  return (
    <Grid container>
      <Grid item xs={12} md={3} container>
        <Link to="/">
          <IconButton>
            <KeyboardBackspaceIcon />
            <Typography variant="body1" display="inline">
              Back to Home
            </Typography>
          </IconButton>
        </Link>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6">Property Types</Typography>

          {options.map((option, index) => (
            <Typography
              key={index}
              variant="h6"
              component="div"
              sx={{
                fontWeight: selectedOption === option ? "600" : "500",
                cursor: "pointer",
              }}
              onClick={() => setSelectedOptions(option)}
            >
              {option}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={9}
        spacing={5}
        p={isSmallScreen ? 3 : 15}
      >
        <Grid item xs={12}>
          <Typography variant="h6">Search</Typography>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            sx={{
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
              [theme.breakpoints.up("md")]: {
                width: "80%",
              },
            }}
            onChange={(e) => setQuery(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            sx={{
              textAlign: "center",
              color: "black",
              backgroundColor: "yellow",
              [theme.breakpoints.down("md")]: {
                marginTop: "10px",
                marginLeft: "30%",
              },
              [theme.breakpoints.up("md")]: {
                marginLeft: "10px",
                width: "15%",
              },
            }}
            marginRight={2}
            filteredData
            size="large"
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" display="inline">
            Selected Properties
          </Typography>
          <BasicTable />
        </Grid>
        {filteredData && (
          <Grid item xs={12} mt={2}>
            <Typography variant="h6" display="inline">
              Search Results
            </Typography>
            <SelectionTable rows={filteredData} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PropertySearchTool;
