import { configureStore } from "@reduxjs/toolkit";
import contacteSlice from "./feature/contacteSlice";

export default configureStore({
    reducer : {
        contact : contacteSlice
    }
})