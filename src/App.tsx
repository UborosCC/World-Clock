import './App.css'
import Home from './pages/Home'
import AddTimezone from './pages/AddTimezone';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/add-timezone' element={<AddTimezone />} />
    </Routes>
    </>
  )
}