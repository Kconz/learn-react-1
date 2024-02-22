import React from "react";

function header(props) {
  const { viteLogo, reactLogo } = props;
  return (
    <>
      <nav className="nav-bar">
        <div className="logoImg">
          <img src={viteLogo} alt="React-logo" style={{ margin: "0 15px" }} />
          <img src={reactLogo} alt="React-logo" />
        </div>
        <ul className="wrapper">
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Students</li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default header;
