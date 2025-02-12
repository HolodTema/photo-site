import React from "react"
import HomeSlider from "./HomeSlider";
import Container from "./Container";
import FooterContactIconPhone from "../images/footer_contact_phone.png";
import FooterContactIconEmail from "../images/footer_contact_email.png";
import '../styles/SectionHome.css'
import SocialInstaImage from '../images/footer_contact_insta.png'
import SocialVkImage from '../images/footer_contact_vk.png'
import SocialTelegramImage from '../images/footer_contact_telegram.png'
import HomeSocialIcon from "./HomeSocialIcon";
import HomeProjectCard from "./HomeProjectCard";
import HomeProjectCardImage from '../images/home_project_card.jpg'
import * as ConstFile from '../util/const'

class SectionHome extends React.Component {
    render() {
        return (
            <div className="div_section_home">
                <HomeSlider/>
                <Container>
                    <div className="div_home_contacts">
                        <div className="div_home_email_phone">
                            <div className="div_home_email">
                                <img className="img_home_email" src={FooterContactIconEmail} alt=""/>
                                <p className="p_home_email">
                                    holod.nasta@yandex.ru
                                </p>
                            </div>
                            <div className="div_home_phone">
                                <img className="img_home_phone" src={FooterContactIconPhone} alt=""/>
                                <p className="p_home_phone">
                                    8-914-008-45-15
                                </p>
                            </div>
                        </div>
                        <div className="div_home_socials">
                            <HomeSocialIcon href="https://vk.com/nastyaho" src={SocialVkImage}/>
                            <HomeSocialIcon href="https://t.me/videodiva" src={SocialTelegramImage}/>
                            <HomeSocialIcon href="https://www.instagram.com/ananas_tica" src={SocialInstaImage}/>
                        </div>
                    </div>
                </Container>
                <div className="div_home_projects_caption">
                    <div className="div_home_projects_caption_line"></div>
                    <p className="p_home_projects_caption">Проекты</p>
                </div>
                <Container >
                    <div className="div_home_project_cards">
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT1}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT2}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT3}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT4}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT5}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT6}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT7}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT8}/>
                        <HomeProjectCard src={HomeProjectCardImage} dest={ConstFile.PAGE_PROJECT9}/>
                    </div>
                </Container>
            </div>

        )
    }
}

export default SectionHome