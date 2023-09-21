import React, { useState } from "react";
import ContactIcon from "./UI/contactIcon/ContactIcon";
import MoreContactsButton from "./UI/moreContactsButton/MoreContactsButton";

const ClientContactCell = ({ contacts }) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <td>
      <div style={{ display: "flex", gap: "5px"}}>
        <ul className="clients-table__contacts-list">
          {contacts.map((contact, index) => (
            <li
              key={contact.id}
              className={index > 3 && isHidden ? "hidden" : ""}
            >
              <ContactIcon contact={contact} />
            </li>
          ))}
        </ul>
        {contacts.length >= 5 && isHidden && (
          <MoreContactsButton onClick={() => setIsHidden(false)}>
            {`+${contacts.length - 4}`}
          </MoreContactsButton>
        )}
      </div>
    </td>
  );
};

export default ClientContactCell;
