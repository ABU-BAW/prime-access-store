import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import About from "./pages/About"
import ProductDescription from "./pages/Product-description"
import NotFound from "./pages/NotFound"




function App() {

  
  return (
    <div className="flex flex-col min-h-screen w-full">

      <header className="shrink-0">
        <Navbar/>
      </header>

      <main className="flex-1 bg-muted text-foreground flex flex-col px-4 lg:px-45 py-4">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/:id" element={<ProductDescription />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
      <Footer/>
    </div>
      
  )
}

export default App
