import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';
import { CardProvider } from "./contexts/CardContex";
import { Cart } from "./components/Cart";
import { ItemDetail } from "./components/ItemDetail";

function App() {
  return (
    <CardProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvendios!" />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/descrpition/:id" element={<ItemListContainer greeting="Bienvendios!" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/ItemDetail/:descripcion" element={ItemDetail} />
          <Route path="/product/:productId" element={ItemDetailContainer} />

        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;