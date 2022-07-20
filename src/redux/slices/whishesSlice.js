import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    stars: [
        {
            id: 1,
            wish: 'sjdNVbvdfbzdubiuzdbhiudhbrbh',
            top: '150px',
            left: '400px',
            width: '30px',
            height: '30px'
        },

        {
            id: 2,
            wish: 'sjdNVbvdfbzdubiuzdbhiudhbrbhdmblkbnsbn',
            top: '250px',
            left: '350px',
            width: '40px',
            height: '40px'
        },
    ]
};

const wishesSlice = createSlice({
    name: 'wishes',
    initialState,
    reducers: {
        addWish: (state, action) => {
         state.stars = [action.payload, ...state.stars]
        }
    }
});

export const {addWish} = wishesSlice.actions;

export default wishesSlice.reducer;