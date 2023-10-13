import Cart from "./Pages/Cart.jsx";
import Home from "./Pages/Home.jsx";
import CategoryPage from "./Pages/CategoryPage.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> <Home /> </>} />
          <Route path="/cart" element={<> <Cart /> </>} />
          <Route path="/categoryPage" element={<> <CategoryPage /> </>} />
          <Route path="/productsPage" element={<> <ProductsPage /> </>} />
        </Routes>
      </BrowserRouter>
     </>
  );
}

export default App;
