import { Outlet, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import CategoryList from "./components/CategoryList"
import ProductPage from "./pages/Product-description"
import AuthLayout from "./components/auth"
import Login from "./pages/auth/login"
import Register from "./pages/auth/register"
import AdminLayout from "./components/admin/adminLayout"
import Overview from "./pages/admin/Overview"
import Products from "./pages/admin/Products "
import Categories from "./pages/admin/Categories"
import Storefront from "./pages/admin/Storefront"
import CheckAuth from "./common/check-auth"



function PublicLayout() {
  return ( 
    <div className="flex flex-col min-h-screen w-full">
      <header className="shrink-0">
        <Navbar/>
      </header> 

      <main className="flex-1 bg-muted text-foreground flex flex-col px-4 lg:px-45 py-2 mt-20">
        <Outlet/>
      </main>

      <Footer/>

    </div>
   );
}





function App() {

  
  return (
    
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/:category" element={<CategoryList />} />
        <Route path="/shop/product/:id" element={<ProductPage />} />
      </Route>

      <Route path="/admin/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login/>}  />
        <Route path="register" element={<Register/>} />
      </Route>

      <Route element={<CheckAuth/>}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="overview" element={<Overview/>}  />
          <Route path="products" element={<Products/>} />
          <Route path="categories" element={<Categories/>}  />
          <Route path="store-front" element={<Storefront/>} /> 
        </Route> 
      </Route>
        
      <Route path="*" element={<NotFound />} /> 

    </Routes>
      
  )
}

export default App
