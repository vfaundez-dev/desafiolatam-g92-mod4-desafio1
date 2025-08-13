import { Cart } from "./pages/Cart";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Pizza } from "./pages/Pizza";
import { Register } from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {

  const { token } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <Routes>
          <Route path="/" element={ <Home /> } />
          
          <Route path="/register" element={
            !token ? <Register /> : <Navigate to="/" />
          }/>

          <Route path="/login" element={
            !token ? <Login /> : <Navigate to="/" />
          }/>

          <Route path="/profile" element={
            token ? <Profile /> : <Navigate to="/login" /> 
          }/>
          
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/pizza/:id" element={ <Pizza /> } />
          <Route path="/404" element={ <NotFound /> } />
          <Route path="/*" element={ <NotFound /> } />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
