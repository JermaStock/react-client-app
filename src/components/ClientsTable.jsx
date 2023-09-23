import React from "react";
import ClientsList from "./ClientsList";
import ClientSortButton from "./UI/sortButton/ClientSortButton";
import IconArrow from "./UI/icons/IconArrow";

const ClientTable = ({
  clients,
  filter,
  setFilter,
  openEditModal,
  openDeleteModal,
}) => {
  return (
    <div className="table-overlay">
      <table bordercolor="#f5f5f5" className="clients-table">
        <colgroup>
          <col width={"105px"} />
          <col width={"250px"} />
          <col width={"105px"} />
          <col width={"105px"} />
          <col width={"110px"} />
          <col width={"80px"} />
        </colgroup>
        <thead className="clients-table__head">
          <tr>
            <th>
              <ClientSortButton
                filter={filter}
                setFilter={setFilter}
                sortValue="id"
                title="ID"
              >
                <IconArrow filter={filter} sortValue="id" />
              </ClientSortButton>
            </th>
            <th>
              <ClientSortButton
                filter={filter}
                setFilter={setFilter}
                sortValue="fullname"
                title="Фамилия Имя Отчество"
              >
                <IconArrow filter={filter} sortValue="fullname" />
              </ClientSortButton>
            </th>
            <th>
              <ClientSortButton
                filter={filter}
                setFilter={setFilter}
                sortValue="createdAt"
                title="Дата и время создания"
              >
                <IconArrow filter={filter} sortValue="createdAt" />
              </ClientSortButton>
            </th>
            <th>
              <ClientSortButton
                filter={filter}
                setFilter={setFilter}
                sortValue="updatedAt"
                title="Последние изменения"
              >
                <IconArrow filter={filter} sortValue="updatedAt" />
              </ClientSortButton>
            </th>
            <th className="clients-table__btn">Контакты</th>
            <th className="clients-table__btn" colSpan={2}>
              Действия
            </th>
          </tr>
        </thead>
        <ClientsList
          clients={clients}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
      </table>
    </div>
  );
};

export default ClientTable;
