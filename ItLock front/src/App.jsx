import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./assets/layouts/MainLayout/MainLayout";
import Home from "./assets/pages/Home/Home";
import AddPage from "./assets/pages/Add/AddPage";
import BasketPage from "./assets/pages/Basket/BasketPage";
import WishlistPage from "./assets/pages/Wishlist/WishlistPage";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />



        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
