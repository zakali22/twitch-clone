import React from "react"
import ReactDOM from "react-dom"
import history from "../../history"

const Modal = ({title, onDismissAction, buttons}) => {
    return ReactDOM.createPortal(
        <div className="modal" onClick={onDismissAction}>
            <div className="modal__bg"></div>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <div className="modal__buttons">
                    {buttons}
                </div>
            </div>
        </div>
    , document.getElementById("modal"))
}

export default Modal;