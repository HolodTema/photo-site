import React from 'react';
import Container from './Container';
import FooterPageButton from "./FooterPageButton";
import FooterLogo from '../images/header_logo.png'
import '../styles/Footer.css'
import FooterContactIcon from "./FooterContactIcon";
import FooterContactIconVk from "../images/footer_contact_vk.png"
import FooterContactIconTelegram from "../images/footer_contact_telegram.png"
import FooterContactIconInsta from "../images/footer_contact_insta.png"
import FooterContactIconEmail from "../images/footer_contact_email.png"
import FooterContactIconPhone from "../images/footer_contact_phone.png"
import FooterProjectImage from './FooterProjectImage'
import FooterProjectImage1 from '../images/footer_project1.jpg'
import FooterProjectImage2 from '../images/footer_project2.jpg'
import FooterProjectImage3 from '../images/footer_project3.jpg'
import FooterProjectImage4 from '../images/footer_project4.jpg'
import FooterProjectImage5 from '../images/footer_project5.jpg'
import FooterProjectImage6 from '../images/footer_project6.jpg'
import * as ConstFile from '../util/const'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <div className="div_footer_columns">
                        <div className="div_footer_column_logo_info">
                            <img className="img_footer_logo" src={FooterLogo} alt=""/>
                            <p className="p_footer_logo_text">The concept of Brume has roots in the Vedic Literature. It
                                comes as a developed form of sensual photography without mechanistic details and boasts
                                a
                                strong emotional background.</p>
                        </div>
                        <div className="div_footer_column_pages">
                            <p className="p_footer_pages_title">РАЗДЕЛЫ САЙТА</p>
                            <FooterPageButton dest={ConstFile.PAGE_PORTFOLIO} text="ПОРТФОЛИО"/>
                            <FooterPageButton dest={ConstFile.PAGE_ABOUT} text="ОБО МНЕ"/>
                            <FooterPageButton dest={ConstFile.PAGE_PRICE} text="ЦЕНЫ"/>
                            <FooterPageButton dest={ConstFile.PAGE_CONTACTS} text="КОНТАКТЫ"/>
                        </div>
                        <div className="div_footer_column_contacts">
                            <p className="p_footer_contacts_title">КОНТАКТЫ</p>
                            <div className="div_footer_contacts_icons">
                                <FooterContactIcon src={FooterContactIconVk}/>
                                <FooterContactIcon src={FooterContactIconTelegram}/>
                                <FooterContactIcon src={FooterContactIconInsta}/>
                            </div>
                            <div className="div_footer_contacts_email">
                                <img className="img_footer_contacts_email" src={FooterContactIconEmail} alt=""/>
                                <p className="p_footer_contacts_email">holod.nasta@yandex.ru</p>
                            </div>
                            <div className="div_footer_contacts_phone">
                                <img className="img_footer_contacts_phone" src={FooterContactIconPhone} alt=""/>
                                <p className="p_footer_contacts_phone">8-914-008-45-15</p>
                            </div>
                        </div>
                        <div className="div_footer_column_projects">
                            <p className="p_footer_projects_title">ПРОЕКТЫ</   p>
                            <div className="div_footer_projects_images">
                                <FooterProjectImage src={FooterProjectImage1}/>
                                <FooterProjectImage src={FooterProjectImage2}/>
                                <FooterProjectImage src={FooterProjectImage3}/>
                                <FooterProjectImage src={FooterProjectImage4}/>
                                <FooterProjectImage src={FooterProjectImage5}/>
                                <FooterProjectImage src={FooterProjectImage6}/>
                            </div>
                        </div>
                    </div>
                </Container>
                <div className="div_footer_developer">
                    Created by Artem Holodilov. ©All rights reversed
                </div>
            </footer>
        )
    }
}

export default Footer