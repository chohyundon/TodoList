import React from "react";
import Logo from './img/Logo.png'
import './Footer.css'


function TodoFooter(){
  return(
    <div>
      <div className="img">
        <img src={Logo} alt = "GDSC logo"/>
      </div>
      <div className="name">
        <p>Donny X James</p>
      </div>
    </div>
  );
};

export default TodoFooter;