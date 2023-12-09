import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import { Tooltip } from 'react-tooltip'


function App() {
  return (
    <>
      <header id="header">
        <Header />
        <Tooltip id="my-tooltip" className='bg-success index' />
      </header>

     
    </>
  )
}
export default App
