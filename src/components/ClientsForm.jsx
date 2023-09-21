import React, { useEffect, useState } from "react";
import ClientInput from "./UI/input/ClientInput";
import ClientButton from "./UI/button/ClientButton";
import ClientCancelButton from "./UI/cancelButton/CancelButton";
import ClientContactForm from "./ClientContactForm";
import CloseButton from "./UI/closeButton/CloseButton";
import ClientLabel from "./UI/label/ClientLabel";
import { useInput } from "../hooks/useInput";
import { destroyInputFields, formatName } from "../utils/utlis";

const ClientsForm = ({
  client,
  setClient,
  closeModal,
  createClient,
  editClient,
  editForm,
  setEditForm,
  openDeleteModal,
  isClickOutsideModal,
  setClickOutsideModal,
}) => {
  const { surname, name, secondname } = {
    surname: useInput("Фамилия", client.surname, {
      maxLength: 20,
      isName: false,
      required: true,
    }),
    name: useInput("Имя", client.name, {
      maxLength: 20,
      isName: false,
      required: true,
    }),
    secondname: useInput("Отчество", client.secondname, {
      maxLength: 20,
      isName: false,
      required: false,
    }),
  };
  const [contacts, setContacts] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    setContacts(structuredClone(client.contacts));
  }, [client.contacts]);

  useEffect(() => {
    setValidationErrors([
      ...new Set(
        [...contacts]
          .filter((c) => c.validation?.isDirty && !c.validation?.inputValid)
          .map((c) => c.validation?.errorMessage)
      ),
    ]);
  }, [contacts]);

  useEffect(() => {
    if (isClickOutsideModal && !editForm.opened) {
      destroyInputFields([surname, name, secondname]);
    }
    setClickOutsideModal(false);
  }, [editForm.opened]);

  const addNewClient = (e) => {
    e.preventDefault();
    const newClient = {
      surname: formatName(surname.value),
      name: formatName(name.value),
      secondname: formatName(secondname.value),
      contacts: [
        ...contacts.map((c) => ({
          type: c.type,
          value: c.value,
          id: c.id,
        })),
      ],
      id: Date.now(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    createClient(newClient);
    destroyInputFields([surname, name, secondname]);
  };

  const changeExistingClient = (e) => {
    e.preventDefault();
    const editedClient = {
      ...client,
      surname: formatName(surname.value),
      name: formatName(name.value),
      secondname: formatName(secondname.value),
      updatedAt: new Date(),
      contacts: [
        ...contacts.map((c) => ({
          type: c.type,
          value: c.value,
          id: c.id,
        })),
      ],
    };
    editClient(editedClient);
    destroyInputFields([surname, name, secondname]);
  };

  const isValid = () => {
    if (editForm.opened && !editForm.dirty) {
      return !surname.inputValid || !name.inputValid || !secondname.inputValid;
    }

    return (
      !surname.inputValid ||
      !name.inputValid ||
      !secondname.inputValid ||
      ![...contacts]
        .filter((c) => c.validation)
        .every((c) => c.validation?.inputValid)
    );
  };

  const closeFormModal = () => {
    destroyInputFields([surname, name, secondname]);
    closeModal();
  };

  return (
    <form className="client-form">
      <CloseButton onClick={closeFormModal} />
      <h2>
        {editForm.opened ? (
          <div>
            Изменить данные <span>ID {client.id}</span>
          </div>
        ) : (
          <div>Новый клиент</div>
        )}
      </h2>
      <ClientLabel title="Фамилия">
        <ClientInput
          value={surname.value}
          onChange={(e) => {
            surname.onChange(e);
          }}
          onBlur={() => {
            surname.onBlur();
            if (isClickOutsideModal && client.id) {
              surname.destroy();
              console.log("Выход с blur фамилии", client);
            }
          }}
        />
      </ClientLabel>
      <ClientLabel title="Имя">
        <ClientInput
          value={name.value}
          onChange={(e) => {
            name.onChange(e);
          }}
          onBlur={() => {
            name.onBlur();
            if (isClickOutsideModal && client.id) {
              name.destroy();
            }
          }}
        />
      </ClientLabel>
      <ClientLabel title="Отчество">
        <ClientInput
          value={secondname.value}
          onChange={(e) => {
            secondname.onChange(e);
          }}
          onBlur={() => {
            secondname.onBlur();
            if (isClickOutsideModal && client.id) {
              secondname.destroy();
            }
          }}
        />
      </ClientLabel>

      <ClientContactForm
        client={client}
        setClient={setClient}
        editForm={editForm}
        setEditForm={setEditForm}
        isClickOutsideModal={isClickOutsideModal}
        contacts={contacts}
        setContacts={setContacts}
      />

      {
        <div>
          {surname.isDirty && !surname.inputValid && (
            <div style={{ color: "red" }}>{surname.errorMessage}</div>
          )}
          {name.isDirty && !name.inputValid && (
            <div style={{ color: "red" }}>{name.errorMessage}</div>
          )}
          {secondname.isDirty && !secondname.inputValid && (
            <div style={{ color: "red" }}>{secondname.errorMessage}</div>
          )}
          {validationErrors.map((err) => (
            <div key={err} style={{ color: "red" }}>
              {err}
            </div>
          ))}
        </div>
      }

      {editForm.opened ? (
        <div>
          <ClientButton disabled={isValid()} onClick={changeExistingClient}>
            Сохранить
          </ClientButton>
          <ClientCancelButton onClick={() => openDeleteModal(client)}>
            Удалить клиента
          </ClientCancelButton>
        </div>
      ) : (
        <div>
          <ClientButton disabled={isValid()} onClick={addNewClient}>
            Сохранить
          </ClientButton>
          <ClientCancelButton onClick={closeFormModal}>
            Отмена
          </ClientCancelButton>
        </div>
      )}
    </form>
  );
};

export default ClientsForm;
