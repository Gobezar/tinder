import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=> {
    const response = await axios.get('https://randomuser.me/api/')
        const result = (response.data.results[0])
        return result
})

const initialState = {
    currentUser: [],
    historyViewList: [],
    favoriteList: [],
    likedList: [],
    status: 'loading', // loading | success | error
}

const fetchUsersSlice = createSlice ({
    name: 'fetchUsers',
    initialState,
    reducers: {
        setCurrentUser (state, action) {
            state.currentUser = action.payload
        },
        AddtoHistoryViewList (state, action) {
            if (!state.historyViewList.includes(state.currentUser)) {
                state.historyViewList = [...state.historyViewList, state.currentUser]
              } else return
        },
        ShowPrevUser (state, action) {
            state.currentUser =  state.historyViewList[state.historyViewList.length - 2];
        },
        RemoveAllHistoryView (state, action) {
            state.historyViewList = []
        }, 
        AddtoFavoriteList (state, action) {
            const findedIndex = state.favoriteList.findIndex((user) => user.cell === action.payload.cell)
            if (findedIndex !== -1)  return alert("Вы уже добавили в избранное этого человека")
            state.favoriteList = [...state.favoriteList, action.payload] 
        },
        AddtoLikedList (state, action) {
            const findedIndex = state.likedList.findIndex((user) => user.cell === action.payload.cell)
            if (findedIndex !== -1)  return alert("Вы уже лайкали этого человека")
            state.likedList = [...state.likedList, action.payload] 
        },
        RemoveFromFavoriteList (state, action) {
            state.favoriteList = state.favoriteList.filter(obj => obj.email !== action.payload)
        },
        RemoveAllFavorites (state, action) {
            state.favoriteList = []
        }, 
        RemoveFromLikedList (state, action) {
            state.likedList = state.likedList.filter(obj => obj.email !== action.payload)
        },
        RemoveAllLiked (state, action) {
            state.likedList = []
        }, 

    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.status = 'loading'
            state.currentUser = []
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            state.status = 'success';
        },
        [fetchUsers.rejected]: (state) => {
            state.status = 'error';
            state.currentUser = []
        },
    }
})




export const {setCurrentUser, AddtoHistoryViewList, ShowPrevUser, RemoveAllHistoryView, AddtoFavoriteList, AddtoLikedList, RemoveFromFavoriteList, RemoveAllFavorites, RemoveFromLikedList, RemoveAllLiked} = fetchUsersSlice.actions;

export default fetchUsersSlice.reducer