import React, { useEffect, useState } from "react";
import ClientInput from "./UI/input/ClientInput";
import ClientButton from "./UI/button/ClientButton";
import ClientCancelButton from "./UI/cancelButton/CancelButton";
import ClientContactForm from "./ClientContactForm";
import CloseButton from "./UI/closeButton/CloseButton";
import ClientLabel from "./UI/label/ClientLabel";
import { useInput } from "../hooks/useInput";
import { destroyInputFields, formatName } from "../utils/utlis";
import { useDispatch, useSelector } from "react-redux";
import { clearClient, createClient, editClient } from "../store/clientsSlice";
import { changeModalVisible } from "../store/modalSlice";
import { handleFormClosingByBlur, resetFormHandler } from "../store/formSlice";

const ClientsForm = ({ closeModal, openDeleteModal }) => {
  const client = useSelector((store) => store.clients.client);
  const editForm = useSelector((store) => store.form);
  const dispatch = useDispatch();

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
  const [isFocus, setIsFocus] = useState({
    surname: false,
    name: false,
    secondname: false,
  });

  useEffect(() => {
    destroyInputFields([surname, name, secondname]);
    surname.initValue(client.surname);
    name.initValue(client.name);
    secondname.initValue(client.secondname);
    setContacts(structuredClone(client.contacts));
  }, [client]);

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
    if (!editForm.opened) {
      dispatch(handleFormClosingByBlur({ isFormClosedByBlur: true }));
    } 
  }, [editForm.opened]);

  const addNewClient = () => {
    dispatch(
      createClient({
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
      })
    );
    dispatch(clearClient());
    dispatch(changeModalVisible(false));
    destroyInputFields([surname, name, secondname]);
    setContacts([]);
  };

  const changeExistingClient = () => {
    dispatch(
      editClient({
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
      })
    );
    dispatch(clearClient());
    dispatch(changeModalVisible(false));
    dispatch(resetFormHandler());
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

  const cancelOperationOnClient = () => {
    destroyInputFields([surname, name, secondname]);
    setContacts([]);
    closeModal();
  };

  return (
    <form className="client-form" onSubmit={(e) => e.preventDefault()}>
      <CloseButton type="button" onClick={cancelOperationOnClient} />
      <h2 className="client-form__title">
        {editForm.opened ? (
          <div className="client-form__main-title">
            Изменить данные{" "}
            <span className="client-form__main-title--id">ID: {client.id}</span>
          </div>
        ) : (
          <div className="client-form__main-title">Новый клиент</div>
        )}
      </h2>
      <ClientLabel
        title="Фамилия"
        reqSymbol="*"
        isDanger={surname.isDirty && !surname.inputValid}
        filled={surname.value}
        isFocus={isFocus.surname}
      >
        <ClientInput
          value={surname.value}
          onChange={(e) => {
            surname.onChange(e);
          }}
          onBlur={() => {
            surname.onBlur();
            setIsFocus({ ...isFocus, surname: false });
          }}
          onFocus={() => setIsFocus({ ...isFocus, surname: true })}
        />
      </ClientLabel>
      <ClientLabel
        title="Имя"
        reqSymbol="*"
        isDanger={name.isDirty && !name.inputValid}
        filled={name.value}
        isFocus={isFocus.name}
      >
        <ClientInput
          value={name.value}
          onChange={(e) => {
            name.onChange(e);
          }}
          onBlur={() => {
            name.onBlur();
            setIsFocus({ ...isFocus, name: false });
          }}
          onFocus={() => setIsFocus({ ...isFocus, name: true })}
        />
      </ClientLabel>
      <ClientLabel
        title="Отчество"
        isDanger={secondname.isDirty && !secondname.inputValid}
        filled={secondname.value}
        isFocus={isFocus.secondname}
      >
        <ClientInput
          value={secondname.value}
          onChange={(e) => {
            secondname.onChange(e);
          }}
          onBlur={() => {
            secondname.onBlur();
            setIsFocus({ ...isFocus, secondname: false });
          }}
          onFocus={() => setIsFocus({ ...isFocus, secondname: true })}
        />
      </ClientLabel>

      <ClientContactForm
        client={client}
        contacts={contacts}
        setContacts={setContacts}
      />

      {
        <div className="error-block">
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
        <div className="client-form__button-set">
          <ClientButton disabled={isValid()} onClick={changeExistingClient}>
            Сохранить
          </ClientButton>
          <ClientCancelButton onClick={() => openDeleteModal(client)}>
            Удалить клиента
          </ClientCancelButton>
        </div>
      ) : (
        <div className="client-form__button-set">
          <ClientButton disabled={isValid()} onClick={addNewClient}>
            Сохранить
          </ClientButton>
          <ClientCancelButton onClick={cancelOperationOnClient}>
            Отмена
          </ClientCancelButton>
        </div>
      )}
    </form>
  );
};

export default ClientsForm;
