import React from 'react'
import '../styles/ButtonContactsForm.css'

class ButtonContactsForm extends React.Component {

    constructor(props) {
        super(props);
        // Это привязка необходима, чтобы `this` работал в callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("clicked")
        const name = document.querySelector(".input_contacts_form_name").value
        const phone = document.querySelector(".input_contacts_form_phone").value
        const message = document.querySelector(".input_contacts_form_message").value
    }

    render() {
        return (
            <a className="a_button_contacts_form" onClick={this.handleClick}>
                ОТПРАВИТЬ
            </a>
        )
    }
}

export default ButtonContactsForm