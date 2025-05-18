import React from "react";

function Alert(props) {
  return (
    //   props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
    //     <strong>{props.alert.type}</strong>: {props.alert.message}
    //   </div>
    <div style={{height:'50px'}}>
    {props.alert && <div class="alert alert-success" role="alert" >
        <strong>{props.alert.type}</strong>: {props.alert.message}
    </div>}
    </div>
  );
}

export default Alert;
