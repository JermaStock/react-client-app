import React, { useState } from "react";
import cl from "./ContactSelect.module.scss";
import DropdownIcon from "../icons/DropdownIcon/DropdownIcon";

const ContactSelect = ({
  options,
  value,
  onChange,
  name,
  select,
  setSelect,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    // <select
    // 	value={value}
    // 	onChange={onChange}
    // 	name={name}
    // >
    // 	{options.map(option =>
    // 		<option key={option.value} value={option.value}>
    // 			{option.name}
    // 		</option>
    // 	)}
    // </select>

    <div
      className={cl.select}
      data-name={name}
      data-value={select.value}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={cl.select__head}>
        {select.name}
        <DropdownIcon
          isActive={isActive}
        />
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
                  // onClick={(e) => {
                  //   setSelect({
                  //     name: e.target.textContent,
                  //     value: option.value,
                  //   });
                  // }}
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
