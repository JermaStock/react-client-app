import React, { useRef } from "react";
import classes from "./ClientModal.module.scss";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { useSelector } from "react-redux";

const ClientModal = ({ children, closeModal }) => {
  const modalActive = useSelector(store => store.modal);
  const modal = useRef(null);
  const rootClassesModal = [classes.modal];
  const rootClassesContent = [classes.modal__content];

  if (modalActive.isActive) {
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
