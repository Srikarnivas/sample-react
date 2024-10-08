
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route extract path='/' element={<Home/>}/>
        <Route extract path='/adduser' element={<AddUser/>}/>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
