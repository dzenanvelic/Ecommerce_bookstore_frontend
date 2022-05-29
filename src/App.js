
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import SideMenu from './elements/SideMenu';
import BackLayer from './elements/BackLayer';
import { useState } from 'react';

function App(props) {
  const [open, setOpen] = useState(false)

  const openDrawer = () => {
    setOpen(true)
  }
  const closeDrawer = () => {
    setOpen(false)
  }
  return (<>
    <Router>
      <Navbar openDrawer={openDrawer} />
      {open && <BackLayer closeDrawer={closeDrawer} open={open} />}
      <SideMenu closeDrawer={closeDrawer} open={open} />
      <Routes>





        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

      </Routes>

    </Router>
  </>);
}

export default App;
