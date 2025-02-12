import React from "react"
import '../styles/HomeSocialIcon.css'


export default function HomeSocialIcon(props) {

    function handleClick() {
        document.location.href = props.href
    }
    return (
        <img className="img_home_social" onClick={handleClick} src={props.src} alt=""/>
    );
}
