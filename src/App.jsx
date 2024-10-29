import './App.css'
import LineCharts from './components/LineChart/LineChart'
import Naber from './components/Navber/Naber'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOption/PriceOptions'
// import DeisyNev from './components/DeisyNav/DeisyNev'

function App() {
  

  return (
    <>
      <Naber></Naber>
      {/* <DeisyNev></DeisyNev> */}
      {/* <h1 className='text-2xl'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
      
    </>
  )
}

export default App
