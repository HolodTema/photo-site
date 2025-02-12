import React from 'react'
import '../styles/SectionVideoProject.css'
import Container from "./Container";
import {useDispatch, useSelector} from "react-redux";
import {portfolio} from "../redux/pageSlice";


export default function SectionVideoProject(props) {

    const page = useSelector((state) => state.page.value)
    const dispatch = useDispatch()

    function backToPortfolio() {
        dispatch(portfolio())
    }

    return (
        <div className="div_section_video_project">
            <div className="div_video_project_header">
                <div className="div_video_project_header_line"></div>
                <p className="p_video_project_header">ИМЯ ПРОЕКТА</p>
            </div>
            <Container>
                <div className="div_video_project_video">
                    <iframe className="iframe_video_project_video" width="850" height="500" src="https://rutube.ru/play/embed/7716bd3e665725c3c008ae7ab4ff02e2"
                            frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen
                            allowFullScreen></iframe>
                </div>
                <p className="p_video_project_desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata</p>
                <div className="div_button_photo_project_back_to_portfolio">
                    <a className="a_button_photo_project_back_to_portfolio" onClick={backToPortfolio}>ВЕРНУТЬСЯ В ПОРТФОЛИО</a>
                </div>
            </Container>

        </div>
    );
}

