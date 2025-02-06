import React from 'react';
import '../styles/HeaderButton.css'

class HeaderButton extends React.Component {
    render() {
        return (
            <div className="div_header_button">
                <a className="a_header_button" href={this.props.href}>{this.props.text}</a>
                <img className="img_header_button_line" src="" alt=""/>
            </div>
        )
    }
}

export default HeaderButton