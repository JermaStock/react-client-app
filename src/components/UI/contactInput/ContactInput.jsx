import React, { useEffect, useState } from "react";
import cl from "./ContactInput.module.scss";
import { useInput } from "../../../hooks/useInput";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { changeFormDirtiness } from "../../../store/formSlice";

const ContactInput = ({
  contact: { value, type },
  onChange,
  name,
  validationRules,
  index,
  contacts,
  setContacts,
}) => {
  const editForm = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const [validationType, setValidationType] = useState(validationRules.email);
  const inputField = useInput(
    validationType.title,
    value,
    validationType.rules
  );

  const rootClasses = [cl.input];

  if (inputField.isDirty && !inputField.inputValid) {
    rootClasses.push(cl.error);
  }

  useEffect(() => {
    inputField.reset();
    setValidationType(validationRules[type]);
  }, [type]);

  useEffect(() => {
    inputField.initValue(value);
  }, []);

  useEffect(() => {
    if (editForm.dirty) {
      const validatedContacts = [...contacts];
      const newError = inputField;
      validatedContacts[index]["validation"] = newError;
      setContacts(validatedContacts);
    }
  }, [
    inputField.value,
    inputField.isDirty,
    inputField.errorMessage,
    inputField.inputValid,
  ]);

  return type === "phone" ? (
    <InputMask
      placeholder="Введите данные контакта"
      className={rootClasses.join(" ")}
      mask="+7 (999) 999-99-99"
      name={name}
      value={inputField.value}
      onChange={(e) => {
        inputField.onChange(e);
        onChange(e);
      }}
      onBlur={() => {
        inputField.onBlur();
        if (editForm.opened) {
          dispatch(changeFormDirtiness({ dirty: true }));
        }

        if (editForm.isFormClosedByBlur) {
          setContacts([]);
        }
      }}
    />
  ) : (
    <input
      placeholder="Введите данные контакта"
      className={rootClasses.join(" ")}
      name={name}
      value={inputField.value}
      onChange={(e) => {
        inputField.onChange(e);
        onChange(e);
      }}
      onBlur={() => {
        inputField.onBlur();
        if (editForm.opened) {
          dispatch(changeFormDirtiness({ dirty: true }));
        } 

        if (!editForm.isFormClosedByBlur) {
          dispatch(changeFormDirtiness({ dirty: true }));
        }
      }}
    />
  );
};

export default ContactInput;
