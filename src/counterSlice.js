import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    isLoading: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateCounterAsync.fulfilled,
                (state, action) => {
                    state.value = action.payload;
                    state.isLoading = false
                })
            .addCase(updateCounterAsync.rejected,
                (state) => {
                    state.value = "failed";
                    state.isLoading = false
                })
            .addCase(updateCounterAsync.pending,
                (state) => {
                    state.isLoading = true
                })
    }
});

export const updateCounterAsync = createAsyncThunk(
    "counter/updateCounterAsync",
    async (num) => {
        if (isNaN(+num)) {
            return Promise.reject();
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return +num;
    }
);

export default counterSlice.reducer;