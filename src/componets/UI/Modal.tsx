import React from "react";
import ReactDOM from "react-dom";

interface Modal {
    children: JSX.Element|JSX.Element[];
};
interface ModalOverlay {
    children: JSX.Element|JSX.Element[],
  };
interface Props {
}

const Backdrop = ({}:Props) => {
   return (
   <div className="backdrop"></div>
   )
}
const ModalOverlay = ({children}: ModalOverlay) => {
   return (
   <div className="modal">
    <div className="content">{children}</div>
    </div>
    )
}


let modalRoot = document.getElementById("overlay") as HTMLElement;
const Modal = ({children}: Modal) => {
  return (
    <>
    {ReactDOM.createPortal( <Backdrop/>,modalRoot)}
    {ReactDOM.createPortal( <ModalOverlay>{children}</ModalOverlay>,modalRoot)}
    </>
  );
};

export default Modal;
