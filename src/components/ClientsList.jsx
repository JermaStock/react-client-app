import React from "react";
import ClientRow from "./UI/tableRow/ClientRow";
import ClientContactCell from "./ClientContactCell";
import ClientDateCell from "./UI/clientDateCell/ClientDateCell";
import ControlClientButton from "./UI/controlClientButton/ControlClientButton";

import { useSelector } from "react-redux";
import { useClients } from "../hooks/useClients";
import DefaultClientRow from "./UI/defaultClientRow/DefaultClientRow";


const ClientsList = ({ openEditModal, openDeleteModal }) => {
  const clients = useSelector(store => store.clients.clients);
  const filter = useSelector(store => store.filter);
  const sortedAndFilteredClients = useClients(clients, filter);

  return (
    <tbody className="clients-table__body">
      {sortedAndFilteredClients.length
        ? 
        sortedAndFilteredClients.map((client) => (
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
        ))
        :
        (!sortedAndFilteredClients.length && filter.query)
        ?
        <DefaultClientRow title='Поиск не дал результатов'/>
        :
        <DefaultClientRow title='Список клиентов пуст'/>
    }
    </tbody>
  );
};

export default ClientsList;
