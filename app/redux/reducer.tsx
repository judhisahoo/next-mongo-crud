import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false, formId: undefined, deleteId: null },
};

export const ReducerSlice = createSlice({
  name: "nextMongoCrud",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
    updateAction: (state, action) => {
      console.log("action.payload", action.payload);
      state.client.formId = action.payload;
    },
    deleteAction: (state, action) => {
      console.log("action.payload", action.payload);
      state.client.deleteId = action.payload;
    },
  },
});

export const { toggleChangeAction, updateAction, deleteAction } =
  ReducerSlice.actions;

export default ReducerSlice.reducer;
