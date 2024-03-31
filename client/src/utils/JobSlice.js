import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobData: null,
  matchingData: null,
  myJobs: null,
};

export const jobSlice = createSlice({
  name: "Job",
  initialState,
  reducers: {
    setJobData: (state, action) => {
      state.jobData = action.payload;
    },
    setMatchingJobDat: (state, action) => {
      state.matchingData = action.payload;
    },
    setMyJobs: (state, action) => {
      state.myJobs = action.payload;
    },
  },
});

export const { setJobData, setMatchingJobDat, setMyJobs } = jobSlice.actions;
export const JobReducer = jobSlice.reducer;
