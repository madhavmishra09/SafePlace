import React from 'react'
import './App.css'
import Landing from './pages/land.jsx'
import NavBar from './components/nav.jsx'
import { Routes, Route } from 'react-router-dom';
import LoginPage from './auth/login';
import SignUp from './auth/signup'
import ChatLayout from './chat-interface/layout/ChatLayout.jsx'
import Dashboard from './pages/dashboard.jsx'
import SelfCheck from './pages/selfcheck.jsx'
import Support from './pages/support.jsx'

function App() {

  return (
    <Routes>
      <Route path="/"
        element={
          <>
            <NavBar />
            <Landing />
          </>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/self-check" element={<SelfCheck />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/chat" element={
        <>
          <ChatLayout />
        </>
      } />
    </Routes>
  )
}

export default App