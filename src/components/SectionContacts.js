import React from 'react'
import Container from "./Container";
import ContactItem from "./ContactItem";
import ContactItemPhoneImage from '../images/contact_item_phone.png'
import ContactItemEmailImage from '../images/contact_item_email.png'
import ContactItemLocationImage from '../images/contact_item_location.png'
import ContactItemTimeImage from '../images/contact_item_time.png'
import '../styles/SectionContacts.css'
import ButtonContactsForm from "./ButtonContactsForm";

class SectionContacts extends React.Component {
    render() {
        return (
            <div className="section_contacts">
                <Container>
                    <div className="div_contacts_columns">
                        <ContactItem header="ТЕЛЕФОН" desc="8-914-008-45-15" src={ContactItemPhoneImage}/>
                        <ContactItem header="ПОЧТА" desc="holod.nasta@yandex.ru" src={ContactItemEmailImage}/>
                        <ContactItem header="МЕСТОПОЛОЖЕНИЕ" desc="г. Иркутск и его окрестности" src={ContactItemLocationImage}/>
                        <ContactItem header="РЕЖИМ РАБОТЫ" desc="пн-пт с 9:00 до 18:00" src={ContactItemTimeImage}/>
                    </div>
                </Container>
                <div className="div_contacts_form">
                    <div className="div_contacts_form_header">
                        <div className="div_contacts_form_line"></div>
                        <p className="p_contacts_form_header">ОТПРАВЬТЕ МНЕ СООБЩЕНИЕ</p>
                    </div>
                    <div className="div_contacts_form_inputs">
                        <Container>
                            <div className="div_contacts_form_name_phone">
                                <div className="div_contacts_form_name">
                                    <label className="label_contacts_form_name" htmlFor="name">Имя:</label>
                                    <input className="input_contacts_form_name" name="name" type="text" placeholder="Иван"/>
                                    <div className="div_contacts_form_name_line"></div>
                                </div>
                                <div className="div_contacts_form_phone">
                                    <label className="label_contacts_form_phone" htmlFor="phone">Телефон:</label>
                                    <input className="input_contacts_form_phone" name="phone" type="tel" placeholder="+7 000 000 00 00"/>
                                    <div className="div_contacts_form_phone_line"></div>
                                </div>
                            </div>
                            <div className="div_contacts_form_message">
                                <label className="label_contacts_form_message" htmlFor="message">Сообщение:</label>
                                <input className="input_contacts_form_message" name="message" type="text" placeholder="Ваше сообщение"/>
                                <div className="div_contacts_form_message_line"></div>
                            </div>
                            <ButtonContactsForm/>
                        </Container>
                    </div>

                </div>
            </div>
        )
    }
}

export default SectionContacts