import logo from './logo.svg';
import './App.css';
import Popup from '../src/package/src/index';

function App() {
  return (
    <div className="App">
      <Popup status={"success"} title={"my title"} />
      <h1>Learn Popups</h1>
    </div>
  );
}

export default App;
