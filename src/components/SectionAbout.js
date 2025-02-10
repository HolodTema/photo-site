import React from 'react'
import '../styles/SectionAbout.css'
import Container from "./Container";
import AboutDecorSignImage from '../images/about_decor_sign.png'
import FeedbackSlider from "./FeedbackSlider";
import AboutSkillItem from "./AboutSkillItem";
import CompanyItem from "./CompanyItem";
import AboutSkillItemPortraitImage from '../images/about_skill_item_portrait.webp'
import AboutSkillItemFashionImage from '../images/about_skill_item_fashion.webp'
import AboutSkillItemWeddingImage from '../images/about_skill_item_wedding.webp'
import AboutSkillItemTravelImage from '../images/about_skill_item_travel.webp'
import CompanyPhotocasaImage from '../images/company_photocasa.svg'
import CompanyHuionImage from '../images/company_huion.png'
import CompanyAutotradeImage from '../images/company_autotrade.png'
import CompanyWalkingwayImage from '../images/company_walkingway.png'
import CompanyMetrikaImage from '../images/company_metrika.png'

class SectionAbout extends React.Component {
    render() {
        return (
            <div>
                <div className="div_about_header">
                    <div className="div_about_header_line">
                    </div>
                    <div className="div_about_header_text">
                        <p className="p_about_header">ОБО МНЕ</p>
                        <p className="p_about_header_shadow">ОБО МНЕ</p>
                    </div>
                </div>
                <div className="div_about_сontainer">
                    <Container>
                        <div className="div_about_image">
                            <p className="p_about_image_text_top">ВИДЕОГРАФ</p>
                            <p className="p_about_image_text_bottom">ХОЛОДИЛОВА АНАСТАСИЯ</p>
                        </div>
                        <p className="p_about_desc1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata</p>
                        <p className="p_about_desc2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata</p>
                        <div className="div_about_decor">
                            <div className="div_about_decor_line"></div>
                            <img className="img_about_decor_sign" src={AboutDecorSignImage} alt=""/>
                        </div>

                        <div className="div_about_skill_items">
                            <AboutSkillItem src={AboutSkillItemPortraitImage} header="portrait photos"
                                            desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"/>

                            <AboutSkillItem src={AboutSkillItemFashionImage} header="fashion photos"
                                            desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"/>

                            <AboutSkillItem src={AboutSkillItemWeddingImage} header="wedding photos"
                                            desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"/>

                            <AboutSkillItem src={AboutSkillItemTravelImage} header="travel photos"
                                            desc="Proin ultricies augue libero, faucibus elit elementum sed dolor felis, cursus non diam non, finibus feugiat dui, a facilisis urna a ex magna"/>
                        </div>

                    </Container>
                    <div className="div_company_header">
                        <div className="div_company_header_line"></div>
                        <p className="p_company_header">МНЕ ДОВЕРЯЮТ</p>
                    </div>
                    <Container>
                        <div className="div_company_items">
                            <CompanyItem src={CompanyPhotocasaImage} header="Photocasa" desc="Интернет-журнал о фотографии"/>
                            <CompanyItem src={CompanyHuionImage} header="Huion" desc="Производитель фотооборудования"/>
                            <CompanyItem src={CompanyAutotradeImage} header="АвтоТрейд" desc="Федеральная сеть СТО"/>
                            <CompanyItem src={CompanyWalkingwayImage} header="WalkingWay" desc="Производитель фотооборудования"/>
                            <CompanyItem src={CompanyMetrikaImage} header="Metrika" desc="Продакшн-компания из Иркутска"/>
                        </div>
                    </Container>
                    <FeedbackSlider/>
                </div>
            </div>
        )
    }
}

export default SectionAbout