// import logo from './logo.svg';
import './App.css'
// // Bootstrap CSS 
// import Button from 'react-bootstrap/Button' // importing specifically
// import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Heading/Heading'
import data from './components/Band/BandInfoCard'
import React, { useState } from 'react';
import MetalMeta from './components/MetalMeta';
import BandList from './components/BandList/BandList'


function App() {
  // const [bands, setBands] = useState(data);

  return (
    <div>
      <Header />
      <MetalMeta />
      <main>
        {/* <BandList /> */}
      </main>
    </div>
    
  );
}

export default App;
