import React from "react";
import ContactSelect from "./UI/select/ContactSelect";
import ContactInput from "./UI/contactInput/ContactInput";

const ContactField = ({
  client,
  setClient,
  contact,
  onChange,
	onDelete,
  editForm,
	setEditForm,
  isClickOutsideModal,
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
      },
    },
    vk: {
      type: "vk",
      title: "vk",
      rules: {
        isEmpty: true,
      },
    },
    fb: {
      type: "fb",
      title: "fb",
      rules: {
        isEmpty: true,
      },
    },
    other: {
      type: "other",
      title: "other",
      rules: {
        isEmpty: true,
      },
    },
  };
	
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "132px 1fr 30px",
        marginBottom: "15px",
      }}
    >
      <ContactSelect
        value={contact.type}
        name="type"
        onChange={onChange}
        options={[
          { value: "phone", name: "Телефон" },
          { value: "email", name: "Email" },
          { value: "vk", name: "Vk" },
          { value: "fb", name: "Facebook" },
          { value: "other", name: "Другое" },
        ]}
      />
      <ContactInput
        index={index}
        contact={contact}
        name="value"
        onChange={onChange}
        client={client}
        setClient={setClient}
        editForm={editForm}
				setEditForm={setEditForm}
        isClickOutsideModal={isClickOutsideModal}
        validationRules={validationRules}
				
        contacts={contacts}
        setContacts={setContacts}
      />
			<button onClick={onDelete} type='button'>
				X
			</button>
    </div>
  );
};

export default ContactField;
