import React from "react";
import CloseButton from "./UI/closeButton/CloseButton";
import ClientCancelButton from "./UI/cancelButton/CancelButton";
import ClientButton from "./UI/button/ClientButton";

const ConfirmationWindow = ({ closeModal, client, deleteClient }) => {
  return (
    <div>
      <CloseButton onClick={closeModal} />
      <h3>Удалить клиент</h3>
      <p>Вы действительно хотите удалить данного клиента?</p>
      <ClientButton onClick={() => deleteClient(client)}>Удалить</ClientButton>
      <ClientCancelButton onClick={closeModal}>Отмена</ClientCancelButton>
    </div>
  );
};

export default ConfirmationWindow;
