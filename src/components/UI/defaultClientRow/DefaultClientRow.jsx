import React from "react";
import cl from "./DefaultClientRow.module.scss";

const DefaultClientRow = ({ title }) => {
  return (
    <tr className={cl.row}>
      <td colSpan={6} className={cl.row__td}>
        {title}
      </td>
    </tr>
  );
};

export default DefaultClientRow;
