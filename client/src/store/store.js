import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../utils/UserSlice";
import { JobReducer } from "../utils/JobSlice";
import { AppliedJobReducer } from "../utils/AppliedJobSlice";

export const store = configureStore({
  reducer: {
    User: UserReducer,
    Job: JobReducer,
    AppliedJob: AppliedJobReducer,
  },
});
