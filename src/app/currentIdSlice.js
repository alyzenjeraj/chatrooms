import { createSlice } from "@reduxjs/toolkit";

export const currentIdSlice = createSlice({
    name: 'currentId',
    initialState: {
        value: '',
    },
    reducers: {
        deletePost: (state) => {}
    }
})