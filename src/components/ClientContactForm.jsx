import React from "react";
import ClientContactButton from "./UI/contactButton/ClientContactButton";
import ContactField from "./ContactField";
import { useDispatch } from "react-redux";
import { changeFormDirtiness } from "../store/formSlice";

const ClientContactForm = ({
  client,
  contacts,
  setContacts,
}) => {
  const dispatch = useDispatch();

  const onChangeHandler = (e, index) => {
    let { name, value } = e.target;
    if (!name && !value) {
      name = e.target.dataset.name;
      value = e.target.dataset.value;
    }
    const updatedContacts = [...contacts];
    updatedContacts[index][name] = value;
    dispatch(changeFormDirtiness({ dirty: true }));
    setContacts(updatedContacts);
  };

  const onDeleteHandler = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  const addNewContact = () => {
    const newContact = {
      type: "phone",
      value: "",
      id: Date.now(),
    };
    dispatch(changeFormDirtiness({ dirty: true }));
    setContacts([...contacts, newContact]);
  };

  return (
    <div
      className={
        !contacts.length
          ? "client-form-contacts"
          : ["client-form-contacts", "client-form-contacts--active"].join(" ")
      }
    >
      {contacts.map((contact, index) => {
        return (
          <ContactField
            client={client}
            key={contact.id}
            index={index}
            contacts={contacts}
            setContacts={setContacts}
            contact={contact}
            onChange={(e) => onChangeHandler(e, index)}
            onDelete={() => onDeleteHandler(index)}
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
