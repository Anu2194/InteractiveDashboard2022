import {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <Dashboard />
      <div style={{padding:12}}>
        <button onClick={() => setFlag(prev=>!prev)}>Hello World</button>
        {flag && <h1>Hey Man!</h1>}
      </div>
    </div>
  );
}

export default App;
