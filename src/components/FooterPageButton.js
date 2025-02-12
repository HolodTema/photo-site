import React from 'react'
import '../styles/FooterPageButton.css'
import {useDispatch, useSelector} from "react-redux";
import * as ConstFile from "../util/const";
import {about, contacts, portfolio, price} from "../redux/pageSlice";


export default function FooterPageButton(props) {
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

    return(
        <div className={page === props.dest ? "div_footer_page_button_active" : "div_footer_page_button"}>
            <a className="a_footer_page_button" onClick={handleClick} href="#">{props.text}</a>
            <div className="div_footer_page_button_line"></div>
        </div>
    )
}
