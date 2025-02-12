import React from 'react'
import '../styles/SectionPhotoProject.css'
import Container from "./Container";
import PhotoProjectImage1 from '../images/photo_project1.jpg'
import {useDispatch, useSelector} from "react-redux";
import {portfolio} from "../redux/pageSlice";

export default function SectionPhotoProject(props) {

    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function backToPortfolio() {
        dispatch(portfolio())
        window.scrollTo(0, 0)
    }
    return (
        <div className="div_section_photo_project">
            <div className="div_photo_project_header">
                <div className="div_photo_project_header_line"></div>
                <p className="p_photo_project_header">ИМЯ ПРОЕКТА</p>
            </div>
            <Container>
                <img className="img_photo_project1" src={PhotoProjectImage1} alt=""/>
                <p className="p_photo_project_desc1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata</p>
                <img className="img_photo_project2" src={PhotoProjectImage1} alt=""/>
                <img className="img_photo_project3" src={PhotoProjectImage1} alt=""/>
                <img className="img_photo_project4" src={PhotoProjectImage1} alt=""/>
                <div className="div_button_photo_project_back_to_portfolio">
                    <a className="a_button_photo_project_back_to_portfolio" onClick={backToPortfolio}>ВЕРНУТЬСЯ В ПОРТФОЛИО</a>
                </div>
            </Container>
        </div>
    );
}

