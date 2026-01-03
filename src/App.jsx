import React from 'react'
import './App.css'
import Landing from './pages/land.jsx'
import NavBar from './components/nav.jsx'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './auth/login';
import SignUp from './auth/signup';
import ChatPage from './chat interface/chat.jsx'
function App() {

  return (

      <Routes>
        <Route path="/"
          element={
            <>
              <div><NavBar /></div>
              <div><Landing /></div>
            </>
          }
        />
        <Route path="/login" element={<><div><LoginPage /></div></>} />
        <Route path="/signup" element={<><div><SignUp /></div></>} />
        <Route path="/chat" element={<><div><ChatPage /></div></>} />
      </Routes>
  )
}

export default App
