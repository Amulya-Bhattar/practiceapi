import './App.css';
import React, { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';

function App() {
  const [datafetched, setDataFetched] = useState('');
  useEffect(() => { fetch('https://api.github.com/users/kalyansai99').then(res => res.json()).then(data => setDataFetched(data)) },undefined);
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent data = {datafetched} />
    </React.Fragment>
  );
}

export default App;
