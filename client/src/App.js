import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Proyecto from './Componentes/Proyecto/Proyecto';
import Bug from './Componentes/Bug/Bug';
import FormProyecto from './Componentes/FormProyecto/FormProyecto';
import { AuthProvider } from './Componentes/Auth/useAuth';
import RequireAuth from './Componentes/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
    <AuthProvider>
     <Routes>
       <Route exact path = '/' element={<Landing/>}/>
       <Route path = '/home' element={<RequireAuth><Home/></RequireAuth>}/>
       <Route path = '/proyecto/:id' element={<Proyecto/>}/>
       <Route path = '/proyecto/form/:id/' element={<FormProyecto/>}/>
       <Route path = '/bug/:id' element={<Bug/>}/>
     </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
