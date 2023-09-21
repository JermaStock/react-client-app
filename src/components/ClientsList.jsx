import React from "react";
import ClientRow from "./UI/tableRow/ClientRow";
import ClientContactCell from "./ClientContactCell";
import ClientDateCell from "./UI/clientDateCell/ClientDateCell";
import ControlClientButton from "./UI/controlClientButton/ControlClientButton";

const ClientsList = ({
  clients,
  openEditModal,
	openDeleteModal
}) => {
  return (
    <tbody>
      {clients.map((client) => (
        <ClientRow key={client.id}>
          <td>{client.id}</td>
          <td>{client.fullname}</td>
          <ClientDateCell unformattedDate={client.createdAt} />
          <ClientDateCell unformattedDate={client.updatedAt} />
          <ClientContactCell contacts={client.contacts} />
          <td>
            <ControlClientButton
              client={client}
              onClick={openEditModal}
            >
              Изменить
            </ControlClientButton>
          </td>
          <td>
            <ControlClientButton
              client={client}
							onClick={openDeleteModal}
            >
              Удалить
            </ControlClientButton>
          </td>
        </ClientRow>
      ))}
    </tbody>
  );
};

export default ClientsList;
