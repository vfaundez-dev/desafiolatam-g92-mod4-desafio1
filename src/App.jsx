import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Pizza } from "./pages/Pizza";
import { Register } from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import CartProvider from "./context/CartProvider";
import { DataApiProvider } from "./context/DataApiProvider";

function App() {

  return (
    <>
      <DataApiProvider>
        <CartProvider>
          <Navbar />
          <div className="min-vh-100">
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/register" element={ <Register /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/logout" element={ <h2 className="text-center text-danger p-5">Sesión Cerrada</h2> } />
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/cart" element={ <Cart /> } />
              <Route path="/pizza/p001" element={ <Pizza /> } />
              <Route path="/404" element={ <NotFound /> } />
              <Route path="/*" element={ <NotFound /> } />
            </Routes>
          </div>
        </CartProvider>
      </DataApiProvider>
      
        {/* {<Pizza />} */}
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Cart /> */}
      <Footer />
    </>
  )
}

export default App
