import React from 'react';
import logo from './logo.svg';
import './App.css';

import Cards from './components/Card';

import Pie from './components/Piechart';

function App() {
  return (
    <div className="body">
      {/* <p className="ml-5 text-white">Statics for Nick-Florucci</p> */}
      {/* <hr style={{backgroundColor: "white", height:"5"}}/> */}
    {<Cards />}
    </div>
  );
}

export default App;
