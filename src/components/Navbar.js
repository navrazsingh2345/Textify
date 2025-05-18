import React from "react";

export default function Navbar(props) {
  return (
    <>
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Textify - Text Utilities in One Click
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
                style={{
                    backgroundColor: '#28a745', 
                    borderColor: '#28a745',     
                    boxShadow: '0 0 0 0.2rem rgba(40, 167, 69, 0.25)', 
                    borderRadius: 0
                }}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
              Toggle Dark Mode 
            </label>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
