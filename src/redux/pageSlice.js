import { createSlice } from "@reduxjs/toolkit";
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
        }
    }
)

export const { portfolio, about, price, contacts } = pageSlice.actions

export default pageSlice.reducer