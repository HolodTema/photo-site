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
    else if (page === ConstFile.PAGE_PHOTO_PROJECT) {
        return (<SectionPhotoProject/>)
    }
    else if (page === ConstFile.PAGE_VIDEO_PROJECT) {
        return (<SectionVideoProject/>)
    }
    return (<SectionHome/>)
}
