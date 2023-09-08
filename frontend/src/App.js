
import './App.css'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './components/Product'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
     <main>
      <Routes>
        <Route path='/product/:slug' element={<Product/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>

     
    
  )
}

export default App
