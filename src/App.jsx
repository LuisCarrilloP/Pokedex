import './App.css'
import {HashRouter, Routes, Route, Link} from "react-router-dom"
import UserInput from './components/UserInput'
import Pokedex from './components/Pokedex'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  

  return (
    <HashRouter>
       <div className="App">
         <nav className='navbar'>
           <Link to="/" className='text-decoration-none'>Home</Link>
           <Link to="/pokedex" className='text-decoration-none'>Pokedex</Link>
           <Link to="/pokedex/1" className='text-decoration-none'>Pokemon Detail</Link>
         </nav>
      <Routes>
        <Route path="/" element={<UserInput />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />}/>
          <Route path="/pokedex/:id" element={<PokemonDetail />}/>
        </Route>
      </Routes>
      </div>
    </HashRouter>   
    
  )
}

export default App
