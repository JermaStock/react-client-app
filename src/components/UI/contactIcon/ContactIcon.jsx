import React from "react";
import IconPhone from "../icons/IconPhone";
import IconEmail from "../icons/IconEmail";
import IconVk from "../icons/IconVk";
import IconFb from "../icons/IconFb";
import IconOther from "../icons/IconOther";

const ContactIcon = ({ contact: {type, value} }) => {
  switch (type) {
    case "phone":
      return (
				<a href={`tel:${value}`}>
					<IconPhone/>
				</a>
			);
    case "vk":
      return (
				<a href={`${value}`} target="blank">
					<IconVk/>
				</a>
			)
    case "fb":
      return (
				<a href={`${value}`} target="blank">
					<IconFb/>
				</a>
			)
    case "email":
      return (
				<a href={`mailto:${value}`}>
					<IconEmail/>
				</a>
			)
    case "other":
      return (
				<a href={'#'}>
					<IconOther/>
				</a>
			)
    default:
      return <IconOther/>
  }
};

export default ContactIcon;
