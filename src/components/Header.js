import React from "react";
// import "./styles/Header.css"



// Initial purpose of this component is invalid - will repurpose to use as heroku random word component. 
const Header = (props)=>{
    const headerText = "WordApp, friends!"

return (
    <div className="Header">
     <h1> {headerText} </h1>
    </div>
  )
}

export default Header