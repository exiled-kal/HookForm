import React, { useState } from 'react';
import './App.css';

import UserForm from "./components/UserForm";
import Results from "./components/Results";

function App() {
  // create state here by destructure and pass 
  // in the info so we make hook n initialise
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  return (
    <div className="App">
      {/* form will change data we need to pass in setState method */}
      {/* it will change into Results */}
      <UserForm inputs={state} setInputs={setState} />
      {/* result wont change any of the data */}
      <Results result={state} />
    </div>
  );
}

export default App;