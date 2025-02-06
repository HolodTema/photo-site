import React from 'react'
import ButtonToTopImage from '../images/button_to_top.svg'
import '../styles/ButtonToTop.css'

class ButtonToTop extends React.Component {
    render() {
        return (
            <img className="img_button_to_top" src={ButtonToTopImage} alt=""
            onClick={
                () => {
                    document.querySelector("header").scrollIntoView(
                        {behavior: "smooth", block: "center", inline: "start"}
                    );
                }
            }/>
        )
    }
}

export default ButtonToTop