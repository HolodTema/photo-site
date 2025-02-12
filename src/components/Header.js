import React from 'react';
import HeaderButton from './HeaderButton';
import Container from './Container';
import '../styles/Header.css'
import HeaderLogoImage from '../images/header_logo.png'
import * as ConstFile from '../util/const'
class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <Container>
                    <img className="img_header_logo" src={HeaderLogoImage} alt=""/>
                    <div className="div_header_buttons">
                        <HeaderButton dest={ConstFile.PAGE_PORTFOLIO} text="Портфолио" href=""/>
                        <HeaderButton dest={ConstFile.PAGE_ABOUT} text="Обо мне" href=""/>
                        <HeaderButton dest={ConstFile.PAGE_PRICE} text="Цены" href=""/>
                        <HeaderButton dest={ConstFile.PAGE_CONTACTS} text="Контакты" href=""/>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Header