import logo from './logo.svg';
import './App.css'

import Header from './Heading/Heading'
import data from './BandInfoCard'
import { useState } from 'react';


function App() {
  const [data] = useState(data);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
