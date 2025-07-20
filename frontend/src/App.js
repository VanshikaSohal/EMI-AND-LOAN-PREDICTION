import React ,{useState} from 'react';
import Homepage from './Homepage';
import Formpage from './Formpage';
import Result from './Result';
function App() {
  const [page, setPage] = useState('home');
  const [result, setResult] = useState('');

  return (
    <div>
      {page === 'home' && <Homepage setPage={setPage} />}
      {page === 'form' && <Formpage setPage={setPage} setResult={setResult} />}
      {page === 'result' && <Result setPage={setPage} result={result} />}
    </div>
  );
}

export default App;
