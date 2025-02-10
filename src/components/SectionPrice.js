import React from 'react'
import '../styles/SectionPrice.css'
import PriceItem from "./PriceItem";
import Container from "./Container";

class SectionPrice extends React.Component {
    render() {
        return (
            <div>
                <div className="div_price_header">
                    <div className="div_price_header_line"></div>
                    <div className="div_price_header_text">
                        <p className="p_price_header">СТОИМОСТЬ УСЛУГ</p>
                        <p className="p_price_header_shadow">СТОИМОСТЬ УСЛУГ</p>
                    </div>
                </div>
                <div className="div_price_items_container">
                    <Container>
                        <div className="div_price_items">
                            <PriceItem name="Фотосессия" cost="3000 ₽"/>
                            <PriceItem name="Фотосессия" cost="3000 ₽"/>
                            <PriceItem name="Фотосессия" cost="3000 ₽"/>
                        </div>
                    </Container>
                </div>
            </div>
        );
    }
}

export default SectionPrice