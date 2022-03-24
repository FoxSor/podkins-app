import logo from "./logo.svg";
import React, { useEffect, useState }  from 'react';
import "./App.css";
  
const App = () => {
    const [response, setResponse] = useState();
    const [models, setModels] = useState();
    const addModel = () =>
      fetch(`${process.env.REACT_APP_API_URL}get-model`)
            .then(res => res.json())
            .then(
                (data) => {
                    setResponse(data);
                },
            )

      useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}`)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log("conecto?", data);
                },
            )
      }, [])

      const getModels = () =>
        fetch(`${process.env.REACT_APP_API_URL}get-models`)
              .then(res => Promise.resolve(res.json().then(resp => setModels(resp))))
       
      console.log(response)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" 
             alt="logo" />
        <p>A simple React app..... </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React todos
        </a>
        <button onClick={addModel}>
          add model
        </button>
        <button onClick={getModels}>
          see models
        </button>
        {models && models.length && (models.map((model) => <div key={model._id}> {model.nombre} </div>))}
      </header>
    </div>
  );
}
  
export default App;