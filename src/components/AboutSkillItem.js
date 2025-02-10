import React from 'react'
import '../styles/AboutSkillItem.css'

class AboutSkillItem extends React.Component {
    render() {
        return (
            <div className="div_about_skill_item">
                <div className="div_about_skill_item_header">
                    <img className="img_about_skill_item" src={this.props.src} alt=""/>
                    <p className="p_about_skill_item_header">{this.props.header}</p>
                </div>
                <p className="p_about_skill_item_desc">{this.props.desc}</p>
            </div>
        )
    }
}

export default AboutSkillItem