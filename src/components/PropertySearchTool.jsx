import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import BasicTable from "./table/basicTable";
import SelectionTable from "./table/selectionTable";

const PropertySearchTool = () => {
  const propertyData = useSelector((state) => state.property.propertyData);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={3}
        container
        justifyContent="center"
        alignItems="center"
      >
        Property Types
      </Grid>
      <Grid item container xs={12} md={9} spacing={5} p={15}>
        <Grid item xs={12}>
          <Typography variant="h5">Search</Typography>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            sx={{ width: "70%" }}
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
            size="large"
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" display="inline">
            Selected Properties
          </Typography>
          <BasicTable />
        </Grid>
        {propertyData && (
          <Grid item xs={12}>
            <Typography variant="h5" display="inline">
              Search Results
            </Typography>
            <SelectionTable rows={propertyData} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PropertySearchTool;
