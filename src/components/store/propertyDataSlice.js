import { createSlice } from "@reduxjs/toolkit";

export const PropertyDataStore = createSlice({
  name: "property",
  initialState: {
    propertyData: [
      {
        id: 1,
        address: "New York Cheesecake",
        postCode: 237,
        propertyType: "Flat",
        noOfRooms: 4,
        floorArea: 90,
      },
      {
        id: 2,
        address: "Paris Streets",
        postCode: 262,
        propertyType: "Terraced house",
        noOfRooms: 3,
        floorArea: 100,
      },
      {
        id: 3,
        address: "London Eye",
        postCode: 305,
        propertyType: "Flat",
        noOfRooms: 2,
        floorArea: 80,
      },
      {
        id: 4,
        address: "Berlin Wall",
        postCode: 356,
        propertyType: "Semi-detached",
        noOfRooms: 5,
        floorArea: 120,
      },
      {
        id: 5,
        address: "Rome Colosseum",
        postCode: 408,
        propertyType: "Flat",
        noOfRooms: 6,
        floorArea: 150,
      },
    ],
    selectedOptions: [],
    propertyTypeData: [],
  },
  reducers: {
    setSelected: (state, data) => {
      const selected = state.propertyData.filter((row) =>
        data.payload.includes(row.id)
      );
      state.selectedOptions = selected;
    },
    basedOnTypes: (state, data) => {
      if (data.payload === "All") {
        state.propertyTypeData = state.propertyData;
        return;
      }
      const selected = state.propertyData.filter(
        (row) => row.propertyType === data.payload
      );
      state.propertyTypeData = selected;
    },
  },
});

export const { setSelected, basedOnTypes } = PropertyDataStore.actions;

export default PropertyDataStore.reducer;
