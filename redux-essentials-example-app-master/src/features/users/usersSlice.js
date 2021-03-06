import {createSlice} from '@reduxjs/toolkit';

// Set initial state of users
const initialState = [
    {id: '0', name: 'Tianna Jenkins'},
    {id: '1', name: 'Kevin Grant'},
    {id: '2', name: 'Madison Price'}
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
});

export default usersSlice.reducer;