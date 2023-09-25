import React from "react";
import CloseButton from "./UI/closeButton/CloseButton";
import ClientCancelButton from "./UI/cancelButton/CancelButton";
import ClientButton from "./UI/button/ClientButton";
import { clearClient, deleteClient } from "../store/clientsSlice";
import { useDispatch } from "react-redux";
import { changeModalVisible } from "../store/modalSlice";

const ConfirmationWindow = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleClientDeletion = () => {
    dispatch(deleteClient());
    dispatch(clearClient());
    dispatch(changeModalVisible(false));
  };

  return (
    <div className="confirm-modal">
      <CloseButton onClick={closeModal} />
      <h3 className="confirm-modal__title">Удалить клиент</h3>
      <p className="confirm-modal__descr">
        Вы действительно хотите удалить данного клиента?
      </p>
      <div className="confirm-modal__button-set">
        <ClientButton onClick={handleClientDeletion}>Удалить</ClientButton>
        <ClientCancelButton onClick={closeModal}>Отмена</ClientCancelButton>
      </div>
    </div>
  );
};

export default ConfirmationWindow;
