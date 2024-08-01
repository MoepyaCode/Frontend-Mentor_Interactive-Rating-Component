import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface RatingState {
    rating: number;
    total: number;
    submitted: boolean;
}

const initialState: RatingState = {
    rating: 0,
    total: 5,
    submitted: false
}

const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        setRating(state, action: PayloadAction<{ rating: number }>) {
            state.rating = action.payload.rating;
        },
        setSubmitted(state) {
            state.submitted = !state.submitted;
        }
    }
});

export const { setRating, setSubmitted } = ratingSlice.actions;
export default ratingSlice.reducer;