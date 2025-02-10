import React from 'react'
import {useState} from 'react'
import '../styles/FeedbackSlider.css'
import Container from "./Container";
import FeedbackImage1 from '../images/feedback1.jpg'
import FeedbackImage2 from '../images/feedback1.jpg'
import FeedbackImage3 from '../images/feedback1.jpg'
import FeedbackImage4 from '../images/feedback1.jpg'
import ButtonLeftImage from '../images/home_slider_button_left.svg'
import ButtonRightImage from '../images/home_slider_button_right.svg'

class FeedbackSlider extends React.Component {
    count = 0
    names = [
        "Имя1",
        "Имя2",
        "Имя3",
        "Имя4",
    ]

    professions = [
        "профессия1",
        "профессия2",
        "профессия3",
        "профессия4",
    ]

    messages = [
        "текст отзыва 1",
        "текст отзыва 2",
        "текст отзыва 3",
        "текст отзыва 4",
    ]

    photos = [
        FeedbackImage1,
        FeedbackImage2,
        FeedbackImage3,
        FeedbackImage4
    ]

    constructor(props) {
        super(props)
        this.handleLeft = this.handleLeft.bind(this)
        this.handleRight = this.handleRight.bind(this)
        this.state = {
            feedbackName: this.names[0],
            feedbackProfession: this.professions[0],
            feedbackMessage: this.messages[0],
            feedbackPhoto: this.photos[0]
        }
    }


    handleLeft() {
        this.count --
        if (this.count < 0) {
            this.count = this.names.length - 1
        }
        this.setState(
            {
                feedbackName: this.names[this.count],
                feedbackProfession: this.professions[this.count],
                feedbackMessage: this.messages[this.count],
                feedbackPhoto: this.photos[this.count]
            }
        )
    }

    handleRight() {
        this.count ++
        if (this.count >= this.names.length) {
            this.count = 0
        }
        this.setState(
            {
                feedbackName: this.names[this.count],
                feedbackProfession: this.professions[this.count],
                feedbackMessage: this.messages[this.count],
                feedbackPhoto: this.photos[this.count]
            }
        )
    }

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
                            <img className="img_feedback_card" src={this.state.feedbackPhoto} alt=""/>
                            <div className="div_feedback_card_text">
                                <p className="p_feedback_card_message">{this.state.feedbackMessage}</p>
                                <p className="p_feedback_card_name">{this.state.feedbackName}</p>
                                <p className="p_feedback_card_profession">{this.state.feedbackProfession}</p>
                            </div>
                        </div>
                        <div className="div_feedback_buttons">
                            <img className="img_feedback_button_left" src={ButtonLeftImage} onClick={this.handleLeft}
                                 alt=""/>
                            <img className="img_feedback_button_right" src={ButtonRightImage} onClick={this.handleRight}
                                 alt=""/>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default FeedbackSlider