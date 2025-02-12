import React from "react"
import '../styles/FooterProjectImage.css'
import * as ConstFile from '../util/const'
import {useDispatch, useSelector} from "react-redux";
import {project1, project2, project3, project4, project5, project6} from "../redux/pageSlice";



export default function FooterProjectImage(props) {
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
        window.scrollTo(0, 0)
    }

    return (
        <img className="img_footer_project" src={props.src} onClick={handleClick} alt=""/>
    )
}
