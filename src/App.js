import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import React,{useState} from 'react'


function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 750);
  };

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(52, 58, 64)';
      showAlert("Dark Mode Enabled!","Success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Disabled!","Success");
    }
  }

  const [mode, setMode] = useState('light')

  return (
  <>
    <Navbar toggleMode = {toggleMode} mode ={mode}/>
    <Alert alert={alert}/>
    <Hero toggleMode = {toggleMode} mode ={mode} showAlert={showAlert}/>
    <Footer toggleMode = {toggleMode} mode ={mode}/>
  </>
  )
}

export default App;
