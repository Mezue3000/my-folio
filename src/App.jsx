import Header from "./Components/Header";
import Home from './Components/Home';
import About from './Components/About';
import Work from "./Components/Work";
import { Tooltip } from 'react-tooltip'


function App() {
  return (
    <>
      <header id="header">
        <Header />
        <Tooltip id="my-tooltip" className='bg-success index' />
      </header>
 
      <main>
        <Home />
        <About />
        <Work />
      </main> 
    </>
  )
}
export default App
