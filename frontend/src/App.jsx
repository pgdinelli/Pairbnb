import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={ <Login/> }/>

        <Route path='*' element={ <NotFound/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
