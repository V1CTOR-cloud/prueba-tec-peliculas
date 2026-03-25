import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Series from './pages/Series'

function App() {

  return (
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/Movies' element={<Movies />} />
      <Route path='/Series' element={<Series />} />
    </Routes>
  )
}

export default App
