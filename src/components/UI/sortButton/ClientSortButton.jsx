import React from "react";
import cl from "./ClientSortButton.module.scss";

const ClientSortButton = ({
  filter,
  setFilter,
  sortValue,
  title,
  ...props
}) => {
  const rootClasses = [cl.button];

  if (filter.sortBy === sortValue) {
    rootClasses.push(cl.active);
  }

  return (
    <button
      className={rootClasses.join(" ")}
      onClick={() =>
        setFilter({
          ...filter,
          sortType: `${
            filter["sortType"] === "ascend" && filter["sortBy"] === sortValue
              ? "descend"
              : "ascend"
          }`,
          sortBy: sortValue,
        })
      }
    >
      <div className={cl.button__content}>
        <span>{title}</span>
        {props.children}
      </div>
    </button>
  );
};

export default ClientSortButton;
