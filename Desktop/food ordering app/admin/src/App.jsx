import React from 'react'
import SideBar from './components/sideBar/SideBar'
import NavBar from './components/navbar/NavBar'
import { Routes, Route } from 'react-router-dom'
import AddItem from './pages/additem/AddItem';
import ListItem from './pages/listitem/ListItem';
import Orders from './pages/orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <ToastContainer/>
      <NavBar />   
      <hr/>
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path= "/additem" element={<AddItem/>} />
          <Route path= "/listitem" element={<ListItem/>} />
          <Route path= "/orders" element={<Orders/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
