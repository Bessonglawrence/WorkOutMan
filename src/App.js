

//Pages and components
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';

//Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className='pages'>
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='/signup' 
              element={<SignUp />} 
            />
            <Route 
              path='/login' 
              element={<LogIn />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
