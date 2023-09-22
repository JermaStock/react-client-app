import React from "react";
import cl from "./DropdownIcon.module.scss";

const DropdownIcon = ({ isActive }) => {

	const rootClasses = [cl.icon];

	if (isActive) {
		rootClasses.push(cl.active);
	}

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={rootClasses.join(' ')}
    >
      <g clip-path="url(#clip0_224_4425)">
        <path
          d="M1.49503 3.69003C1.25003 3.93503 1.25003 4.33003 1.49503 4.57503L5.65003 8.73003C5.84503 8.92503 6.16003 8.92503 6.35503 8.73003L10.51 4.57503C10.755 4.33003 10.755 3.93503 10.51 3.69003C10.265 3.44503 9.87003 3.44503 9.62503 3.69003L6.00003 7.31003L2.37503 3.68503C2.13503 3.44503 1.73503 3.44503 1.49503 3.69003Z"
          fill="#9873FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_224_4425">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 12) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DropdownIcon;
