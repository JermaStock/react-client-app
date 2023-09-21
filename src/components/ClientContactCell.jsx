import React from "react";
import ContactIcon from "./UI/contactIcon/ContactIcon";

const ClientContactCell = ({ contacts }) => {
  return (
    <td>
      <ul style={{display: 'flex', gap: '5px'}}>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactIcon contact={contact} />
          </li>
        ))}
      </ul>
    </td>
  );
};

export default ClientContactCell;
