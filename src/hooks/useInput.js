import { useEffect, useState } from "react";

const useValidation = (
  name,
  value,
  isDirty,
  validations,
  isReseted,
  setIsReseted
) => {
  const [isEmpty, setEmpty] = useState(false);
  const [required, setRequired] = useState(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [isNameError, setNameError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [isEmailError, setEmailError] = useState(false);
  const [isPhoneError, setPhoneError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      // eslint-disable-next-line default-case
      switch (validation) {
        case "minLength":
          if (value.trim().length < validations[validation]) {
            setMinLengthError(true);
            setErrorMessage(
              `Мин. длина поля ${name} ${validations[validation]} символов(-а)`
            );
          } else {
            setMinLengthError(false);
          }
          break;
        case "isName":
          const nameReg = /^([^0-9]*)$/;
          if (nameReg.test(String(value.trim()).toLowerCase())) {
            setNameError(false);
          } else {
            setNameError(true);
            setErrorMessage(`Поле ${name} содержит недопустимые символы`);
          }
          break;
        case "maxLength":
          if (value.trim().length > validations[validation]) {
            setMaxLengthError(true);
            setErrorMessage(
              `Макс. длина поля ${name} ${validations[validation]} символов(-а)`
            );
          } else {
            setMaxLengthError(false);
          }
          break;
        case "required":
          if (value.trim()) {
            setRequired(false);
          } else {
            setRequired(validations[validation]);
            if (validations[validation]) {
              setErrorMessage(`Поле ${name} обязательно для заполнения`);
            }
          }
          break;
        case "isEmpty":
          if (value.trim()) {
            setEmpty(false);
          } else {
            setEmpty(validations[validation]);
            if (validations[validation]) {
              setErrorMessage("Поля контактов не должны быть пустыми");
            }
          }
          break;
        case "isEmail":
          const emailReg = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
          if (emailReg.test(String(value.trim()))) {
            setEmailError(false);
          } else {
            setEmailError(true);
            setErrorMessage(`Введенный ${name} некорректен`);
          }
          break;
        case "isPhone":
          const phoneReg =
            /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
          if (phoneReg.test(String(value.trim()))) {
            setPhoneError(false);
          } else {
            setPhoneError(true);
            setErrorMessage(`Введенный ${name} некорректен`);
          }
          break;
      }
    }
  }, [value, isDirty, validations, name]);

  useEffect(() => {
    if (!isReseted) {
      if (
        isEmpty ||
        required ||
        maxLengthError ||
        minLengthError ||
        isNameError ||
        isEmailError ||
        isPhoneError
      ) {
        setInputValid(false);
      } else {
        setInputValid(true);
      }
    } else {
      setIsReseted(true);
      setInputValid(false);
      setEmpty(false);
      setRequired(false);
      setMaxLengthError(false);
      setMinLengthError(false);
      setNameError(false);
      setEmailError(false);
      setPhoneError(false);
    }
  }, [
    isEmpty,
    required,
    maxLengthError,
    minLengthError,
    isNameError,
    isEmailError,
    isPhoneError,
    isReseted,
  ]);

  return {
		isEmpty,
    required,
    minLengthError,
    maxLengthError,
    isNameError,
    inputValid,
    isEmailError,
    isPhoneError,
    errorMessage,
  };
};

export const useInput = (name = "", initialValue = "", validations = {}) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const [isReseted, setIsReseted] = useState(false);
  const validationErrors = useValidation(
    name,
    value,
    isDirty,
    validations,
    isReseted,
    setIsReseted
  );

  const onChange = (e) => {
    setIsReseted(false);
    setIsDirty(false);
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
    setIsReseted(false);
  };

  const reset = () => {
    setValue("");
    setIsDirty(false);
    setIsReseted(true);
  };

  const destroy = () => {
    setValue("");
    setIsDirty(false);
  };

  const initValue = (val) => {
    setValue(val);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return {
    value,
    isDirty,
    onChange,
    onBlur,
    reset,
    destroy,
    initValue,
    isReseted,
    ...validationErrors,
  };
};
