import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    isAuth: false
}

const loginSlice = createSlice ({
    name: 'loginSlice',
    initialState,
    reducers: {
       logIn (state, action) {
        state.isAuth = true
       }, 
       logOut (state, action) {
        state.isAuth = false
       }      
        }, 
    })

export const {logIn, logOut} = loginSlice.actions;

export default loginSlice.reducer