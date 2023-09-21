import React from "react";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header__container container">{children}</div>
    </header>
  );
};

export default Header;
