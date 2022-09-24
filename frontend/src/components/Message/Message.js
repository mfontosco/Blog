import React from "react";
// import styles from './Message.module.css'

const Message =({message,Children})=>{
    return (
        <React.Fragment>
        <div className={message}>{Children}</div>
        </React.Fragment>
    )
}

Message.defaultProps = {
 message:"defaultMessage"
}

export default Message