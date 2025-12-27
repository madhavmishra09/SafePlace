import { useState } from 'react'
import './App.css'
import NavBar from './components/nav.jsx'
import ChatLine from './components/chat.jsx'
import { useNavigate,Routes,Route } from 'react-router';
function App() {
  const [count, setCount] = useState(0)
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  return (
    <>
      <Routes>
        <Route path="/"
        element={
          <>
          <div><NavBar/></div>
          <section>
            
          </section>
          <div><ChatLine/></div>
          </>
        }
      />
      </Routes>
    </>
  )
}

export default App
