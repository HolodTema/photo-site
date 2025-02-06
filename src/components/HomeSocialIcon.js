import React from "react"
import '../styles/HomeSocialIcon.css'


class HomeSocialIcon extends React.Component {
    render() {
        return (
            <img className="img_home_social" src={this.props.src} alt=""/>
        );
    }
}

export default HomeSocialIcon