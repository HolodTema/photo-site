import React from 'react'
import '../styles/Toast.css'

class Toast extends React.Component {
    render() {
        return (
            <div className="div_toast">{this.props.text}</div>
        )
    }
}

export default Toast