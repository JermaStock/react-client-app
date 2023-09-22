import React from "react";
import IconPhone from "../icons/IconPhone";
import IconEmail from "../icons/IconEmail";
import IconVk from "../icons/IconVk";
import IconFb from "../icons/IconFb";
import IconOther from "../icons/IconOther";
import cl from './ContactIcon.module.scss';

const ContactIcon = ({ contact: { type, value } }) => {
  switch (type) {
    case "phone":
      return (
        <a className={cl.icon} href={`tel:${value}`}>
          <IconPhone />
        </a>
      );
    case "vk":
      return (
        <a className={cl.icon} href={`https://${value}`} target="blank">
          <IconVk />
        </a>
      );
    case "fb":
      return (
        <a className={cl.icon} href={`https://${value}`} target="blank">
          <IconFb />
        </a>
      );
    case "email":
      return (
        <a className={cl.icon} href={`mailto:${value}`}>
          <IconEmail />
        </a>
      );
    case "other":
      return (
        <a className={cl.icon} href={"#"}>
          <IconOther />
        </a>
      );
    default:
      return <IconOther />;
  }
};

export default ContactIcon;
