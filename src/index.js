import React from "react";
import  ReactDOM  from "react-dom/client";
import MyApp from "./MyApp";


const display = ReactDOM.createRoot(document.getElementById("wrapper"))

display.render(

<React.StrictMode>
  <MyApp/>
</React.StrictMode>
)