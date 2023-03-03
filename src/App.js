// import logo from './logo.svg';
import { useState } from 'react';
import './App.css'
// // Bootstrap CSS 
// import Button from 'react-bootstrap/Button' // importing specifically
// import 'bootstrap/dist/css/bootstrap.min.css';
import MetalMeta from './components/MetalMeta/MetalMeta';
import Header from './components/Heading/Heading'
import BandList from './components/BandList/BandList'


function App() {
  const [bands, setBands] = useState('');

  return (
    <div>
      <Header />
      <MetalMeta query={bands} setQuery={setBands}/>
      <BandList query={bands}/>
    </div>
  );
}

export default App;
