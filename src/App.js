import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is Enabled", "success");
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="Ayush" aboutMe="About Ayush" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      <div className="container my-3" >
        <Routes>      
          <Route exact path="/about" element = {
          <About mode={mode}/>
          }/>
          <Route exact path="/" element = {
            <TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert}></TextForm>
          }/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
