import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error:null,
    disable:false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.disable = true;
        },
        signInSuccess: (state,action) => {
            state.currentUser = action.payload;
            state.disable = false;
            state.error = null;
        },
        signInFailure: (state,action) => {
            state.error = action.payload;
            state.disable = false;
        }

    }
})

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions

export default userSlice.reducer