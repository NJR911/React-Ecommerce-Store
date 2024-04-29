import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './component/products'
import Product from './component/product'
import { Provider } from 'react-redux'
import Footer from './component/footer'
import About from './component/about'
import Contact from './component/contact'
import Cart from './component/cart'
import store from './store/store'

function App() {


  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/products",
  //     element: <Products />
  //   },
  //   {
  //     path: "/products/:id",
  //     element: <Product />
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />
  //   }
  // ])

  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<Product />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>

          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App

