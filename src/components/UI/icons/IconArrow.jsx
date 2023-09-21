import React from "react";
import cl from "./IconArrow.module.scss";

const IconArrow = ({ filter, sortValue, ...props }) => {
  const rootClasses = [cl.icon];

  if (filter.sortBy === sortValue && filter.sortType === "ascend") {
    rootClasses.push(cl.ascend);
  }
  
  return (
    <svg
      className={rootClasses.join(" ")}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        d="M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z"
        fill="#9873FF"
      />
      <defs>
        <clipPath id="clip0_121_2332">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconArrow;
