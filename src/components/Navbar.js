import React from 'react'
function Navbar(props) {
  return (
    <>
      <div style={{ backgroundColor: "blue" }}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`}>
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ fontWeight: "600", color: "white" }}
            >
              {props.title}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar