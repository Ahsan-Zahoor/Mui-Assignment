import React, { useEffect, useMemo, useState } from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BasicTable from "./table/basicTable";
import SelectionTable from "./table/selectionTable";
import { basedOnTypes, setSelected } from "./store/propertyDataSlice";

const PropertySearchTool = () => {
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
      <Grid
        item
        xs={12}
        md={3}
        container
        // justifyContent="center"
        // alignItems="center"
      >
        <Link to="/">
          <IconButton>
            <KeyboardBackspaceIcon />
            Back to Blogs
          </IconButton>
        </Link>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6">Property Types</Typography>

          {options.map((option) => (
            <Typography
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
      <Grid item container xs={12} md={9} spacing={5} p={15}>
        <Grid item xs={12}>
          <Typography variant="h6">Search</Typography>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            sx={{ width: "85%" }}
            onChange={(e) => setQuery(e.target.value)}
          ></TextField>
          <Button
            variant="contained"
            sx={{
              textAlign: "center",
              marginLeft: "6%",
              color: "black",
              backgroundColor: "yellow",
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
