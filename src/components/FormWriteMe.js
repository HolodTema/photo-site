import React from 'react'
import Container from "./Container";
import ButtonContactsForm from "./ButtonContactsForm";
import '../styles/FormWriteMe.css'

export default function FormWriteMe(props) {
    return (
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
    )
}