import React from 'react'
import '../styles/PriceItem.css'
class PriceItem extends React.Component {
    render() {
        return (
            <div className="div_price_item">
                <p className="p_price_item_name">{this.props.name}</p>
                <p className="p_price_item_starts_from">стоимость от</p>
                <p className="p_price_item_cost">{this.props.cost}</p>
                <p className="p_price_item_desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
            </div>
        )
    }
}

export default PriceItem