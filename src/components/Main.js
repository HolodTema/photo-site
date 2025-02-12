import React, {useContext} from 'react';
import SectionHome from './SectionHome'
import SectionContacts from './SectionContacts'
import SectionAbout from "./SectionAbout";
import SectionPrice from "./SectionPrice";
import SectionPhotoProject from "./SectionPhotoProject";
import SectionVideoProject from "./SectionVideoProject"
import * as ConstFile from '../util/const'
import {useSelector} from "react-redux";


export default function Main() {
    const page = useSelector((state) => state.page.value)
    console.log(page)
    if (page === ConstFile.PAGE_PORTFOLIO) {
        return (<SectionHome/>)
    }
    else if (page === ConstFile.PAGE_ABOUT) {
        return (<SectionAbout/>)
    }
    else if (page === ConstFile.PAGE_PRICE) {
        return (<SectionPrice/>)
    }
    else if (page === ConstFile.PAGE_CONTACTS) {
        return (<SectionContacts/>)
    }
    else if (page === ConstFile.PAGE_PROJECT1) {
        return (<SectionVideoProject number="1"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT2) {
        return (<SectionPhotoProject number="2"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT3) {
        return (<SectionPhotoProject number="3"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT4) {
        return (<SectionPhotoProject number="4"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT5) {
        return (<SectionPhotoProject number="5"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT6) {
        return (<SectionPhotoProject number="6"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT7) {
        return (<SectionPhotoProject number="7"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT8) {
        return (<SectionPhotoProject number="8"/>)
    }
    else if (page === ConstFile.PAGE_PROJECT9) {
        return (<SectionPhotoProject number="9"/>)
    }
    return (<SectionHome/>)
}
