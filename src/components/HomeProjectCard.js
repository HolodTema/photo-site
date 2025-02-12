import React from 'react'
import '../styles/HomeProjectCard.css'
import {useDispatch, useSelector} from "react-redux";
import {
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9
} from "../redux/pageSlice";
import * as ConstFile from '../util/const'


export default function HomeProjectCard(props) {
    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function handleClick() {
        if (props.dest === ConstFile.PAGE_PROJECT1) {
            dispatch(project1())
        }
        if (props.dest === ConstFile.PAGE_PROJECT2) {
            dispatch(project2())
        }
        if (props.dest === ConstFile.PAGE_PROJECT3) {
            dispatch(project3())
        }
        if (props.dest === ConstFile.PAGE_PROJECT4) {
            dispatch(project4())
        }
        if (props.dest === ConstFile.PAGE_PROJECT5) {
            dispatch(project5())
        }
        if (props.dest === ConstFile.PAGE_PROJECT6) {
            dispatch(project6())
        }
        if (props.dest === ConstFile.PAGE_PROJECT7) {
            dispatch(project7())
        }
        if (props.dest === ConstFile.PAGE_PROJECT8) {
            dispatch(project8())
        }
        if (props.dest === ConstFile.PAGE_PROJECT9) {
            dispatch(project9())
        }
    }

    return (
        <div className="div_home_project_card" onClick={handleClick}>
            <img className="img_home_project_card" src={props.src} alt=""/>
            <p className="p_home_project_card_title">CARD TITLE</p>
            <p className="p_home_project_card_subtitle">Card subtitle</p>
        </div>
    );
}
