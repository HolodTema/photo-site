import React from 'react'
import Container from "./Container";
import ContactItem from "./ContactItem";
import ContactItemPhoneImage from '../images/contact_item_phone.png'
import ContactItemEmailImage from '../images/contact_item_email.png'
import ContactItemLocationImage from '../images/contact_item_location.png'
import ContactItemTimeImage from '../images/contact_item_time.png'
import '../styles/SectionContacts.css'
import ButtonContactsForm from "./ButtonContactsForm";
import FormWriteMe from "./FormWriteMe";

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
                <FormWriteMe/>
            </div>
        )
    }
}

export default SectionContacts