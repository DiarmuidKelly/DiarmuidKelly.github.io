import React from 'react';
import './App.css';
import Bar from "./Bar";

function App() {
  return (
        <div>
            <div><Bar target={1000}/></div>
          {/*<ProgressBar now={60} />*/}
        </div>
  );
}

export default App;
