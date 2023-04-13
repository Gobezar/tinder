import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    userData: {
        name: 'Анонимус',
        surName: 'Интернетный',
        gender: 'мужской',
        age: '14',
        location: {
            country: 'Россия',
            state: 'Москва',
            street: 'Проспект мира',
            homeNum: '88'
            },
        email: 'anonymus@mail.ru',
        phone: '+79876543210'
    },
    isOpen: false
}

const modalSlice = createSlice ({
    name: 'modalSlice',
    initialState,
    reducers: {
        openModal (state, action) {
            state.isOpen = true;
            state.isSaving = false;

        },
        closeModal (state, action) {
            state.isOpen = false
        }, 
        handleSave (state, action) {
            state.userData = action.payload;
            state.isOpen = false; 
        },
        }, 

    })

export const {openModal, closeModal, handleSave} = modalSlice.actions;

export default modalSlice.reducer