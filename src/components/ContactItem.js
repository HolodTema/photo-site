import React from 'react'
import '../styles/ContactItem.css'

class ContactItem extends React.Component {

    render() {
        return(
            <div className="div_contact_item">
                <img className="img_contact_item" src={this.props.src} alt=""/>
                <div className="div_contact_item_text">
                    <p className="p_contact_item_header">{this.props.header}</p>
                    <p className="p_contact_item_desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default ContactItem