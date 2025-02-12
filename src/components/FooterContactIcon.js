import React from 'react'
import '../styles/FooterContactIcon.css'


export default function FooterContactIcon(props) {
    function handleClick() {
        document.location.href = props.href
    }

    return (
        <img className="img_footer_contact_icon" src={props.src} alt="" onClick={handleClick}/>
    );
}
