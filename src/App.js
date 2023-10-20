import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contato  from './Components/Pages/Contato'
import Compania from './Components/Pages/Compania'
import Produto from './Components/Pages/Produto'
import Container from './Components/Layout/Container'

function App() {
  return (
<Router>
        <div>
        <Link to="/">Home</Link>
        <Link to="/produto">Produto</Link>
        <Link to="/compania">Compania</Link>
        <Link to="/contato">Contato</Link>
        </div>
 <Container>
  <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Produto' element={<Produto />} />
      <Route exact path='/Compania' element={<Compania />} />
      <Route exact path='/Contato' element={<Contato />} />
  </Routes>
 </Container> 
</Router>
    
  );
}

export default App;
