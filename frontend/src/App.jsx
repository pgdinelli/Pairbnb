import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL

function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Header user={user} />

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={ <Login setUser={setUser} /> }/>

        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
