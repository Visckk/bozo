import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contato  from './Components/Pages/Contato'
import Perguntas from './Components/Pages/Perguntas'
import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'

function App() {
  return (

<Router>
  <Navbar/>
  <Container customClass="min-height">
  <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Perguntas' element={<Perguntas />} />
      <Route exact path='/Contato' element={<Contato />} />
  </Routes>
 </Container> 
 <Footer/>
</Router>
    
  );
}

export default App;
