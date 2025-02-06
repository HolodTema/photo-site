import React from 'react';
import HeaderButton from './HeaderButton';
import Container from './Container';
import '../styles/Header.css'
import HeaderLogoImage from '../images/header_logo.png'

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Container>
                    <img className="img_header_logo" src={HeaderLogoImage} alt=""/>
                    <div className="div_header_buttons">
                        <HeaderButton text="Обо мне" href=""/>
                        <HeaderButton text="Портфолио" href=""/>
                        <HeaderButton text="Цены" href=""/>
                        <HeaderButton text="Контакты" href=""/>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Header