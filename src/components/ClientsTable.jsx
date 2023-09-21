import React from "react";
import ClientsList from "./ClientsList";
import ClientSortButton from "./UI/sortButton/ClientSortButton";

const ClientTable = ({
  clients,
  filter,
  setFilter,
	openEditModal,
	openDeleteModal,
}) => {
  return (
    <table
      className="clients-table"
      style={{ textAlign: "left", width: "100%" }}
    >
      <colgroup>
        <col width={"125px"} />
        <col width={"230px"} />
        <col width={"125px"} />
        <col width={"125px"} />
        <col width={"130px"} />
        <col width={"100px"} />
        <col width={"100px"} />
      </colgroup>
      <thead>
        <tr>
          <th style={{ verticalAlign: "bottom" }}>
            <ClientSortButton
              filter={filter}
              setFilter={setFilter}
              sortValue="id"
            >
              ID
            </ClientSortButton>
          </th>
          <th style={{ verticalAlign: "bottom" }}>
            <ClientSortButton
              filter={filter}
              setFilter={setFilter}
              sortValue="fullname"
            >
              Фамилия Имя Отчество
            </ClientSortButton>
          </th>
          <th style={{ verticalAlign: "bottom" }}>
            <ClientSortButton
              filter={filter}
              setFilter={setFilter}
              sortValue="createdAt"
            >
              Дата и время создания
            </ClientSortButton>
          </th>
          <th style={{ verticalAlign: "bottom" }}>
            <ClientSortButton
              filter={filter}
              setFilter={setFilter}
              sortValue="updatedAt"
            >
              Последние изменения
            </ClientSortButton>
          </th>
          <th style={{ verticalAlign: "bottom" }}>Контакты</th>
          <th style={{ verticalAlign: "bottom" }} colSpan={2}>
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
  );
};

export default ClientTable;
