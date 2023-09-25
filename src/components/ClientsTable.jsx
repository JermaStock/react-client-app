import React from "react";
import ClientsList from "./ClientsList";
import ClientSortButton from "./UI/sortButton/ClientSortButton";
import IconArrow from "./UI/icons/IconArrow";
import { useSelector } from "react-redux";

const ClientTable = ({
  openEditModal,
  openDeleteModal,
}) => {
  const filter = useSelector(store => store.filter);

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
                sortValue="id"
                title="ID"
              >
                <IconArrow filter={filter} sortValue="id" />
              </ClientSortButton>
            </th>
            <th>
              <ClientSortButton
                filter={filter}
                sortValue="fullname"
                title="Фамилия Имя Отчество"
              >
                <IconArrow filter={filter} sortValue="fullname" />
              </ClientSortButton>
            </th>
            <th>
              <ClientSortButton
                filter={filter}
                sortValue="createdAt"
                title="Дата и время создания"
              >
                <IconArrow filter={filter} sortValue="createdAt" />
              </ClientSortButton>
            </th>
            <th>
              <ClientSortButton
                filter={filter}
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
          filter={filter}
          openEditModal={openEditModal}
          openDeleteModal={openDeleteModal}
        />
      </table>
    </div>
  );
};

export default ClientTable;
