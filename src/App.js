import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState("light");  //enable or disable dark mode
  const [alert, setAlert] = useState(null);  //to set alert msg

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#071f44";
      showAlert("Dark Mode is Enabled", "success");
    }
    
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");

    }
  };





  return (
    <>
      <Navbar
        title="TextUtils"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert = { alert }/>
      <TextForm heading="Enter the text to Analyze below" mode={mode} showAlert={showAlert} />
      {/* <About/> */}
    </>
  );
}

export default App;
