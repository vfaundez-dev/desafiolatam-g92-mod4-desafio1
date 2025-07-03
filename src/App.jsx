import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Login />
      <Register />
      <Cart />
      <Footer />
    </>
  )
}

export default App
