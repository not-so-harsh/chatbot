import Chat from '../src/component/Chat'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Register from './component/Register';
import Navbar from './component/Navbar';
import Signin from './component/Signin';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='register' element={<Register/>} />
        <Route path='chat' element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
