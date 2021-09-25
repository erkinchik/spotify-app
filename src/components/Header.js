import React from "react";
import { ReactComponent as ArrowIcon } from "../svgs/arrow.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-info">
        <div className="left-block">
          <button className="header-btn">
            <div className="arrowIcon">н</div>
          </button>
          <button className="header-btn">
            <div className="arrowIcon">н</div>
          </button>
        </div>
        <div className="right-block">
          <button className="sign-up">зарегистрироваться</button>
          <button
            style={{
              borderRadius: "30px",
              background: "white",
              color: "black",
            }}
            className="sign-in"
          >
            войти
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
