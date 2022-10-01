import {useState} from 'react';
import './App.css';

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      This is My Dashboard
      <button onClick={() => setFlag(prev=>!prev)}>Hello World</button>
      {flag && <h1>Hey Man!</h1>}
    </div>
  );
}

export default App;
