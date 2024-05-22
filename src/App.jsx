import './App.css'
import { Bottom } from './componets/bottom'
import { Center } from './componets/center'
import { Navbar } from './componets/nav'

function App() {

  return (
    <div className='overflow-hidden'>
    <Navbar/>
    <Center/>
    <Bottom/>
    </div>
  )
}

export default App
