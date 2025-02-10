import React from 'react'
import '../styles/CompanyItem.css'

class CompanyItem extends React.Component {
    render() {
        return (
            <div className="div_company_item">
                <img className="img_company_item" src={this.props.src} alt=""/>
                <div className="div_company_item_window">
                    <p className="p_company_item_window_header">{this.props.header}</p>
                    <p className="p_company_item_window_desc">{this.props.desc}</p>
                </div>
            </div>
        )
    }
}

export default CompanyItem