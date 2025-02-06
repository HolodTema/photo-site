import React from 'react'
import '../styles/HomeProjectCard.css'

class HomeProjectCard extends React.Component {
    render() {
        return (
            <div className="div_home_project_card">
                <img className="img_home_project_card" src={this.props.src} alt=""/>
                <p className="p_home_project_card_title">CARD TITLE</p>
                <p className="p_home_project_card_subtitle">Card subtitle</p>
            </div>
        );
    }
}

export default HomeProjectCard