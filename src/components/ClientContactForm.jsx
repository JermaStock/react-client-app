import React from "react";
import ClientContactButton from "./UI/contactButton/ClientContactButton";
import ContactField from "./ContactField";

const ClientContactForm = ({
  client,
  setClient,
  editForm,
  setEditForm,
  isClickOutsideModal,

  contacts,
  setContacts,
}) => {
  const onChangeHandler = (e, index) => {
    const { name, value } = e.target;
    const updatedContacts = [...contacts];
    updatedContacts[index][name] = value;
		setEditForm({ ...editForm, dirty: true });
    setContacts(updatedContacts);
  };
	
	const onDeleteHandler = (index) => {
		const updatedContacts = [...contacts];
		updatedContacts.splice(index, 1);
		setContacts(updatedContacts);
	}

  const addNewContact = () => {
    const newContact = {
      type: "phone",
      value: "",
      id: Date.now(),
    };
		setEditForm({ ...editForm, dirty: true });
    setContacts([...contacts, newContact]);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      {contacts.map((contact, index) => {
        return (
          <ContactField
            client={client}
            setClient={setClient}
            key={contact.id}
            index={index}
            contacts={contacts}
            setContacts={setContacts}
            contact={contact}
            onChange={(e) => onChangeHandler(e, index)}
						onDelete={() => onDeleteHandler(index)}
            editForm={editForm}
						setEditForm={setEditForm}
            isClickOutsideModal={isClickOutsideModal}
          />
        );
      })}
      {contacts.length < 10 && (
        <ClientContactButton onClick={addNewContact}>
          Добавить контакт
        </ClientContactButton>
      )}
    </div>
  );
};

export default ClientContactForm;
