import { configureStore } from "@reduxjs/toolkit";
import appScile from "./appScile";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice"
const Store = configureStore({
    reducer: {
        app: appScile,
        search: searchSlice,
        chat: chatSlice,
    }

})

export default Store