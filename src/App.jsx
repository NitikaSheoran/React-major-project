import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import authService from './Appwrite/authService'
import { useDispatch } from 'react-redux'
import { login, logout } from './Store/authSlice'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); 
  useEffect(()=>{
    authService.getCurrentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    }). finally(()=>setLoading(false))
  }, []);
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
