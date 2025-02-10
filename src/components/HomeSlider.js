import React from 'react'
import {useState} from 'react'
import '../styles/HomeSlider.css'
import HomeSliderImage1 from '../images/home_slider1.png'
import HomeSliderImage2 from '../images/home_slider2.webp'
import HomeSliderImage3 from '../images/home_slider1.png'
import HomeSliderImage4 from '../images/home_slider1.png'
import HomeSliderButtonRight from '../images/home_slider_button_right.svg'
import HomeSliderButtonLeft from '../images/home_slider_button_left.svg'

class HomeSlider extends React.Component {
    count = 0

    photos = [
        HomeSliderImage1,
        HomeSliderImage2,
        HomeSliderImage3,
        HomeSliderImage4,
    ]

    captions = [
        "caption 1, date: kkk",
        "caption 2, date: kjdfkjf",
        "caption 3, date: dkfdj",
        "caption 4, date: kjkj"
    ]

    constructor(props) {
        super(props)
        this.handleLeft = this.handleLeft.bind(this)
        this.handleRight = this.handleRight.bind(this)
        this.state = {
            photo: this.photos[0],
            caption: this.captions[0]
        }
    }

    handleLeft() {
        this.count --
        if (this.count < 0) {
            this.count = this.photos.length - 1
        }
        this.setState({
            photo: this.photos[this.count],
            caption: this.captions[this.count]
        })
    }

    handleRight() {
        this.count++
        if (this.count >= this.photos.length) {
            this.count = 0
        }
        this.setState({
            photo: this.photos[this.count],
            caption: this.captions[this.count]
        })
    }

    render() {
        return(
            <div className="div_home_slider">
                <img className="img_home_slider" src={this.state.photo} alt=""/>
                <img className="img_home_slider_under" src={this.state.photo} alt=""/>
                <p className="p_home_slider_caption">{this.state.caption}</p>
                <img className="img_home_slider_button_right" onClick={this.handleRight} src={HomeSliderButtonRight} alt=""/>
                <img className="img_home_slider_button_left" onClick={this.handleLeft} src={HomeSliderButtonLeft} alt=""/>
            </div>
        )
    }
}

export default HomeSlider