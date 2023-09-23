import React from "react";
import ClientRow from "./UI/tableRow/ClientRow";
import ClientContactCell from "./ClientContactCell";
import ClientDateCell from "./UI/clientDateCell/ClientDateCell";
import ControlClientButton from "./UI/controlClientButton/ControlClientButton";

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
            <div className="clients-table__cell-control">
              <ControlClientButton
                client={client}
                onClick={openEditModal}
                title="Изменить"
              />
              <ControlClientButton
                client={client}
                onClick={openDeleteModal}
                del={true}
                title="Удалить"
              />
            </div>
          </td>
        </ClientRow>
      ))}
    </tbody>
  );
};

export default ClientsList;
