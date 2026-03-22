import React, { useState } from 'react';
import Homepage from './Homepage';
import Formpage from './Formpage';

function App() {
  const[page,setPage]=useState('home');
  const [result, setResult] = useState(null);

  return (
    <div>
      {page === 'home' && <Homepage setPage={setPage} />}
      {page === 'form' && <Formpage setPage={setPage} setResult={setResult} result={result} />}
      </div>
  );
}

export default App;
