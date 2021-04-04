import React from 'react'
import "./LayoutTopic.css";
function LayoutTopic({Icon, title,content}) {
    return (
        <div className ="layoutTopic">
            {Icon && <Icon  className="layoutTopic_icon" />}
            <div className="layoutTopic_content">
            <h3>{title}</h3>
            <p>{content}</p>

            </div>
            
        </div>
    )
}

export default LayoutTopic
