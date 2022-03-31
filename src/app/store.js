import { configureStore } from "@reduxjs/toolkit";
import LocationSlice from "../features/location/LocationSlice";

export default configureStore({
    reducer: {
        location: LocationSlice,
    },
});
