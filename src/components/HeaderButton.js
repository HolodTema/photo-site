import React, {useContext} from 'react';
import '../styles/HeaderButton.css'
import * as ConstFile from '../util/const'
import {useDispatch, useSelector} from "react-redux";
import {portfolio, about, price, contacts} from '../redux/pageSlice'

export default function HeaderButton(props) {
    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function handleClick() {
        if (page === props.dest) {
            return;
        }

        if (props.dest === ConstFile.PAGE_PORTFOLIO) {
            dispatch(portfolio())
        }
        if (props.dest === ConstFile.PAGE_ABOUT) {
            dispatch(about())
        }
        if (props.dest === ConstFile.PAGE_PRICE) {
            dispatch(price())
        }
        if (props.dest === ConstFile.PAGE_CONTACTS) {
            dispatch(contacts())
        }
    }

    return (
        <div className={page===props.dest ? "div_header_button_active" : "div_header_button"}>
            <a className="a_header_button" onClick={handleClick} href="#">{props.text}</a>
            <div className="div_header_button_line"/>
        </div>
    )
}