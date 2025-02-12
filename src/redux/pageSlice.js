import {createSlice} from "@reduxjs/toolkit";
import * as ConstFile from '../util/const'

export const pageSlice = createSlice(
    {
        name: 'page',
        initialState: {
            value: ConstFile.PAGE_PORTFOLIO
        },
        reducers: {
            portfolio: (state) => {
                state.value = ConstFile.PAGE_PORTFOLIO
            },
            about: (state) => {
                state.value = ConstFile.PAGE_ABOUT
            },
            price: (state) => {
                state.value = ConstFile.PAGE_PRICE
            },
            contacts: (state) => {
                state.value = ConstFile.PAGE_CONTACTS
            },
            project1: (state) => {
                state.value = ConstFile.PAGE_PROJECT1
            },
            project2: (state) => {
                state.value = ConstFile.PAGE_PROJECT2
            },
            project3: (state) => {
                state.value = ConstFile.PAGE_PROJECT3
            },
            project4: (state) => {
                state.value = ConstFile.PAGE_PROJECT4
            },
            project5: (state) => {
                state.value = ConstFile.PAGE_PROJECT5
            },
            project6: (state) => {
                state.value = ConstFile.PAGE_PROJECT6
            },
            project7: (state) => {
                state.value = ConstFile.PAGE_PROJECT7
            },
            project8: (state) => {
                state.value = ConstFile.PAGE_PROJECT8
            },
            project9: (state) => {
                state.value = ConstFile.PAGE_PROJECT9
            },
        }
    }
)

export const {
    portfolio,
    about,
    price,
    contacts,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9
} = pageSlice.actions

export default pageSlice.reducer