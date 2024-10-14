import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { Signup } from './pages/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
