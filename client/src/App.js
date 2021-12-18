import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Proyecto from './Componentes/Proyecto/Proyecto';
import Bug from './Componentes/Bug/Bug';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path = '/' element={<Landing/>}/>
       <Route path = '/home' element={<Home/>}/>
       <Route path = '/proyecto/:id' element={<Proyecto/>}/>
       <Route path = '/bug/:id' element={<Bug/>}/>
     </Routes>
    </div>
  );
}

export default App;
