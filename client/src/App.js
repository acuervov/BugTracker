import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './Componentes/Landing/Landing';
import Home from './Componentes/Home/Home';
import Proyecto from './Componentes/Proyecto/Proyecto';
import Bug from './Componentes/Bug/Bug';
import FormProyecto from './Componentes/FormProyecto/FormProyecto';
import { AuthProvider } from './Componentes/Auth/useAuth';
import RequireAuth from './Componentes/Auth/RequireAuth';
import FormBug from './Componentes/FormBug/FormBug'

function App() {
  return (
    <div className="App">
    <AuthProvider>
     <Routes>
       <Route exact path = '/' element={<Landing/>}/>
       <Route exact path = '/home/:id' element={<RequireAuth><Home/></RequireAuth>}/>
       <Route exact path = '/proyecto/:id/:proyectoId' element={<RequireAuth><Proyecto/></RequireAuth>}/>
       <Route exact path = '/proyecto/form/:id/:proyectoId' element={<RequireAuth><FormProyecto/></RequireAuth>}/>
       <Route exact path = '/bug/form/:id/:proyectoId/:bugId' element={<RequireAuth><FormBug/></RequireAuth>}/>
       <Route exact path = '/bug/:id/:proyectoId/:bugId' element={<RequireAuth><Bug/></RequireAuth>}/>
     </Routes>
     </AuthProvider>
    </div>
  );
}

export default App;
