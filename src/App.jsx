import Header from "./Components/Header";
import Home from './Components/Home';
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
      </main> 
    </>
  )
}
export default App
