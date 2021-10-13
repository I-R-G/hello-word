import React, {Fragment} from "react";
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

function Backdrop (props){
    return (
        <div className = {classes.backdrop} onClick = {props.onClose}/>
    )
}

function ModalOverlay(props){
    return (
        <div className = {classes.modal}>
            <div className = {classes.content}>{props.children}</div>
        </div>
    )
}

const toRoot = document.getElementById("overlays")

function Modal(props){
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose = {props.onClose}/>, toRoot)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, toRoot)}
        </Fragment>
    )
}

export default Modal