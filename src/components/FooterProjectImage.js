import React from "react"
import '../styles/FooterProjectImage.css'

class FooterProjectImage extends React.Component {
    render() {
        return (
            <img className="img_footer_project" src={this.props.src} alt=""/>
        )
    }
}

export default FooterProjectImage