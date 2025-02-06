import React from 'react'
import '../styles/HomeSlider.css'
import HomeSliderImage1 from '../images/home_slider1.png'
import HomeSliderButtonRight from '../images/home_slider_button_right.svg'
import HomeSliderButtonLeft from '../images/home_slider_button_left.svg'

class HomeSlider extends React.Component {
    render() {
        return(
            <div className="div_home_slider">
                <img className="img_home_slider" src={HomeSliderImage1} alt=""/>
                <img className="img_home_slider_under" src={HomeSliderImage1} alt=""/>
                <p className="p_home_slider_caption">Проект: Автоторгаши. Дата: 01.01.2025</p>
                <img className="img_home_slider_button_right" src={HomeSliderButtonRight} alt=""/>
                <img className="img_home_slider_button_left" src={HomeSliderButtonLeft} alt=""/>
            </div>
        )
    }
}

export default HomeSlider