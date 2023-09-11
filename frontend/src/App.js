
import './App.css'
import Home from './components/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Product from './components/Product'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'
import Cart from './components/Cart'
import Signin from './components/Signin'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Shipping from './components/Shipping'
function App() {


  return (
    <BrowserRouter>
    <Navbar/>
    <ToastContainer position='top-right' limit={1}/>
     <main>
      <Routes>
        <Route path='/product/:slug' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </main>
      <Footer/>
    </BrowserRouter>

     
    
  )
}

export default App
