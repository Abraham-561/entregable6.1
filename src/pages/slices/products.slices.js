import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsSlices = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (states, actions) => actions.payload
    }
})

export const { setProducts  } = productsSlices.actions;

export default productsSlices.reducer;

export const getHotelsThunk = (url) => (dispatch) => {
    axios.get(url)
    .then(res => dispatch(setProducts(res.data)))
    .catch(err => console.log(err))
}
