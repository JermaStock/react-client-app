import React from "react";
import ClientRow from "./UI/tableRow/ClientRow";
import ClientContactCell from "./ClientContactCell";
import ClientDateCell from "./UI/clientDateCell/ClientDateCell";
import ControlClientButton from "./UI/controlClientButton/ControlClientButton";
import EditIcon from "./UI/icons/EditIcon";
import DeleteIcon from "./UI/icons/DeleteIcon";

const ClientsList = ({ clients, openEditModal, openDeleteModal }) => {
  return (
    <tbody className="clients-table__body">
      {clients.map((client) => (
        <ClientRow key={client.id}>
          <td className="clients-table__cell">{client.id}</td>
          <td className="clients-table__cell">{client.fullname}</td>
          <ClientDateCell unformattedDate={client.createdAt} />
          <ClientDateCell unformattedDate={client.updatedAt} />
          <ClientContactCell contacts={client.contacts} />
          <td>
            <ControlClientButton client={client} onClick={openEditModal}>
              <EditIcon />
              Изменить
            </ControlClientButton>
          </td>
          <td>
            <ControlClientButton client={client} onClick={openDeleteModal}>
              <DeleteIcon />
              Удалить
            </ControlClientButton>
          </td>
        </ClientRow>
      ))}
    </tbody>
  );
};

export default ClientsList;
