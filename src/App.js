
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1000 );
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#121212';
      showAlert(" Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Lightmode mode has been enabled","success");
    }
  }
  return (
  <>

<Router>
<Navbar title="Textchanger" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
          <Textform showAlert={showAlert} heading="Enter text to analyze "mode={mode}/>
          </Route>
        </Switch>
{/* <About/> */}
</div>
</Router>


  </>
  );
}

export default App;
