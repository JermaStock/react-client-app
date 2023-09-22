import React, { useRef } from "react";
import classes from "./ClientModal.module.scss";
import { useClickOutside } from "../../../hooks/useClickOutside";

const ClientModal = ({ children, modalActive, closeModal }) => {
  const modal = useRef(null);
  const rootClassesModal = [classes.modal];
  const rootClassesContent = [classes.modal__content];

  if (modalActive) {
    rootClassesModal.push(classes.active);
    rootClassesContent.push(classes.active);
  }

  useClickOutside(modal, closeModal);

  return (
    <div className={rootClassesModal.join(" ")}>
      <div ref={modal} className={rootClassesContent.join(" ")}>
        {children}
      </div>
    </div>
  );
};

export default ClientModal;
