import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items: [
        'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
        'wishes Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor eros non cursus hendrerit. Cras id lectus non orci ornare rhoncus. Curabitur mollis ante ac consectetur pulvinar.',
    ]
};

const wishesSlice = createSlice({
    name: 'wishes',
    initialState,
    reducers: {
        addWish: (state, action) => {
         state.items = [...state.items, action.payload]
        }
    }
});

export const {addWish} = wishesSlice.actions;

export default wishesSlice.reducer;