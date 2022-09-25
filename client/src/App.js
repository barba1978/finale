
import './App.css';
import Nursery from './components/nursery/Nursery';
import Read from './components/parents/Read';
import NavTop from './components/NavTop'
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavTop/>
      <Routes>
      <Route exact  path='/' element={<Nursery/>} />
      <Route exact  path='/parents' element={<Read/>} />
      </Routes>
       </header>
    </div>
  );
}

export default App;
