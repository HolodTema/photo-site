import React, {useContext} from 'react';
import '../styles/HeaderButton.css'
import {AppContext} from "../contexts/AppContext";
import * as ConstFile from '../util/const'

export default function HeaderButton(props) {
    const {page, checkoutAbout} = useContext(AppContext)

    return (
        <div className="div_header_button">
            <a className="a_header_button" onClick={checkoutAbout} href="">{props.text}</a>
            <div className="div_header_button_line"/>
        </div>
    )
}