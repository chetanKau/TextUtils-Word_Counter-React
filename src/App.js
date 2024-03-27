
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Homescreen from './Screens/Homescreen';
import About from './components/About';
import Contact from './components/Contact';
import Body from './components/Body'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homescreen/>}>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/' element={<Body/>}/>
          <Route path='/home' element={<Body/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
