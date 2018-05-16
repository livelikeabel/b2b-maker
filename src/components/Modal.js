import React from "react";
import ReactModal from "react-modal";

import Container from "./Container";

ReactModal.setAppElement("#root");

const Modal = ({
  className,
  children,
  overlayClassName,
  bodyOpenClassName,
  onRequestClose,
  containerClassName,
  ...props
}) => (
  <ReactModal>
    {/* <CloseIcon /> */}
    <Container className="container">{children}</Container>
  </ReactModal>
);

export default Modal;
