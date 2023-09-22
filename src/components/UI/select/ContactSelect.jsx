import React, { useRef, useState } from "react";
import cl from "./ContactSelect.module.scss";
import DropdownIcon from "../icons/DropdownIcon/DropdownIcon";
import { useClickOutside } from "../../../hooks/useClickOutside";

const ContactSelect = ({
  options,
  value,
  onChange,
  name,
  select,
  setSelect,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdown = useRef(null);

  useClickOutside(dropdown, () => {
    setIsActive(false);
  });

  return (
    <div
      ref={dropdown}
      className={cl.select}
      data-name={name}
      data-value={select.value}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={cl.select__head}>
        {select.name}
        <DropdownIcon isActive={isActive} />
      </div>
      {isActive && (
        <div className={cl.select__body}>
          {[
            ...options
              .filter((o) => o.name !== select.name)
              .map((option) => (
                <div
                  key={option.value}
                  className={cl.select__item}
                  data-value={option.value}
                  data-name={name}
                  onClick={(e) => {
                    onChange(e);
                    setSelect({ value: option.value, name: option.name });
                  }}
                >
                  {option.name}
                </div>
              )),
          ]}
        </div>
      )}
    </div>
  );
};

export default ContactSelect;
