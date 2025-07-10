import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Pizza } from "./components/Pizza";
import { Register } from "./components/Register";

function App() {

  return (
    <>
      <Navbar />
      <div className="min-vh-100">
        <Pizza />
        {/* <Home /> */}
      </div>
      {/* Modals */}
      <Login />
      <Register />
      <Cart />
      <Footer />
    </>
  )
}

export default App
