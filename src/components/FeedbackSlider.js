import React from 'react'
import '../styles/FeedbackSlider.css'
import Container from "./Container";
import FeedbackImage1 from '../images/feedback1.jpg'
import ButtonLeftImage from '../images/home_slider_button_left.svg'
import ButtonRightImage from '../images/home_slider_button_right.svg'

class FeedbackSlider extends React.Component {
    render() {
        return (
            <div className="div_feedback_slider">
                <div className="div_feedback_header">
                    <div className="div_feedback_header_line"></div>
                    <p className="p_feedback_header">ОТЗЫВЫ</p>
                </div>
                <div className="div_feedback_card_container">
                    <Container>
                        <div className="div_feedback_card">
                            <img className="img_feedback_card" src={FeedbackImage1} alt=""/>
                            <div className="div_feedback_card_text">
                                <p className="p_feedback_card_message">Lorem ipsum dolor sit amet, consetetur sadipscing
                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                                    kasd gubergren, no sea takimata</p>
                                <p className="p_feedback_card_name">VADIM INKOGNITO</p>
                                <p className="p_feedback_card_profession">The best businessman in the world</p>
                            </div>
                        </div>
                        <div className="div_feedback_buttons">
                            <img className="img_feedback_button_left" src={ButtonLeftImage} alt=""/>
                            <img className="img_feedback_button_right" src={ButtonRightImage} alt=""/>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default FeedbackSlider