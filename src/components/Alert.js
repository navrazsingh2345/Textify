import React from "react";

function Alert(props) {
    const alertStyle = {
    position: "fixed",
    top: "50px", // Adjust this based on navbar height
    right: "0px",
    left: "0px",
    zIndex: 9999,
    borderRadius: 0,
  };
  return (
    //   props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
    //     <strong>{props.alert.type}</strong>: {props.alert.message}
    //   </div>
    props.alert && <div class="alert alert-success" role="alert" style={alertStyle}>
        <strong>{props.alert.type}</strong>: {props.alert.message}
    </div>
  );
}

export default Alert;
