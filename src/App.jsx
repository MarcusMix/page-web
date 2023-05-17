import './App.css'
import Examples from './components/examples/examples'
import Home from './components/home/home'
import HowWorks from './components/how-works/howWorks'
import Why from './components/why/why'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <>
    <Navbar/>
      <Home/>
      <Why/>
      <HowWorks/>
      <Examples/>
    </>
  )
}

export default App
