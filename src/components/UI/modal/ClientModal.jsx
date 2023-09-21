import React from "react";
import classes from "./ClientModal.module.scss";

const ClientModal = ({ children, modalActive, closeModal }) => {
  const rootClassesModal = [classes.modal];
  const rootClassesContent = [classes.modal__content];

  if (modalActive) {
    rootClassesModal.push(classes.active);
    rootClassesContent.push(classes.active);
  }

  return (
    <div className={rootClassesModal.join(" ")} onMouseDown={closeModal}>
      <div
        className={rootClassesContent.join(" ")}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ClientModal;
