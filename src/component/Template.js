import React from "react";
import './Template.css'

const Template = ({children}) => {
  return(
    <div classname="main">
      <div className="Title">List</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;