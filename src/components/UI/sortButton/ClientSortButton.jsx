import React from "react";
import cl from "./ClientSortButton.module.scss";
import { useDispatch } from "react-redux";
import { changeSortType, sortClients } from "../../../store/filterSlice";

const ClientSortButton = ({
  filter,
  sortValue,
  title,
  children,
}) => {
  const dispatch = useDispatch();
  const handleSortClients = () => {
    dispatch(
      changeSortType(
        `${
          filter["sortType"] === "ascend" && filter["sortBy"] === sortValue
            ? "descend"
            : "ascend"
        }`
      )
    );
    dispatch(sortClients(sortValue));
  };

  const rootClasses = [cl.button];

  if (filter.sortBy === sortValue) {
    rootClasses.push(cl.active);
  }

  return (
    <button className={rootClasses.join(" ")} onClick={handleSortClients}>
      <div className={cl.button__content}>
        <span>{title}</span>
        {children}
      </div>
    </button>
  );
};

export default ClientSortButton;
