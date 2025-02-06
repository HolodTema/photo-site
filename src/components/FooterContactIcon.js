import React from 'react'
import '../styles/FooterContactIcon.css'
class FooterContactIcon extends React.Component {
    render() {
        return (
            <img className="img_footer_contact_icon" src={this.props.src} alt=""/>
        );
    }
}

export default FooterContactIcon