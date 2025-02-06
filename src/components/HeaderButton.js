import React from 'react';
import '../styles/HeaderButton.css'

class HeaderButton extends React.Component {
    render() {
        return (
            <div className="div_header_button">
                <a className="a_header_button" href={this.props.href}>{this.props.text}</a>
                <div className="div_header_button_line"/>
            </div>
        )
    }
}

export default HeaderButton