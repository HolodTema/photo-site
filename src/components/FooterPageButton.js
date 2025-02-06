import React from 'react'
import '../styles/FooterPageButton.css'

class FooterPageButton extends React.Component {
    render() {
        return(
            <div className="div_footer_page_button">
                <a className="a_footer_page_button" href={this.props.href}>{this.props.text}</a>
                <div className="div_footer_page_button_line"></div>
            </div>
        )
    }
}

export default FooterPageButton