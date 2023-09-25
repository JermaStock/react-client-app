import React, { useState } from "react";
import ContactSelect from "./UI/select/ContactSelect";
import ContactInput from "./UI/contactInput/ContactInput";
import DeleteContactButton from "./UI/deleteContactButton/DeleteContactButton";

const ContactField = ({
  // client,
  // setClient,
  contact,
  onChange,
  onDelete,
  // editForm,
  // setEditForm,
  // isClickOutsideModal,
  index,

  contacts,
  setContacts,
}) => {
  const validationRules = {
    phone: {
      type: "phone",
      title: "Формат номера",
      rules: {
        isPhone: true,
      },
    },
    email: {
      type: "email",
      title: "Email",
      rules: {
        isEmail: true,
        maxLength: 30,
      },
    },
    vk: {
      type: "vk",
      title: "vk",
      rules: {
        isEmpty: true,
        maxLength: 30,
      },
    },
    fb: {
      type: "fb",
      title: "fb",
      rules: {
        isEmpty: true,
        maxLength: 30,
      },
    },
    other: {
      type: "other",
      title: "other",
      rules: {
        isEmpty: true,
        maxLength: 30,
      },
    },
  };

  const options = [
    { value: "phone", name: "Телефон" },
    { value: "email", name: "Email" },
    { value: "vk", name: "Vk" },
    { value: "fb", name: "Facebook" },
    { value: "other", name: "Другое" },
  ];

  const [select, setSelect] = useState({
    value: contact.type,
    name: options.find((o) => o.value === contact.type)?.name,
  });

  return (
    <div
      className="client-form-contacts__label"
    >
      <ContactSelect
        value={contact.type}
        name="type"
        onChange={onChange}
        select={select}
        setSelect={setSelect}
        options={options}
      />
      <ContactInput
        index={index}
        contact={contact}
        name="value"
        onChange={onChange}
        // client={client}
        // setClient={setClient}
        // editForm={editForm}
        // setEditForm={setEditForm}
        // isClickOutsideModal={isClickOutsideModal}
        validationRules={validationRules}
        contacts={contacts}
        setContacts={setContacts}
      />
      <DeleteContactButton onClick={onDelete} type="button" />
    </div>
  );
};

export default ContactField;
