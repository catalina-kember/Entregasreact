import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!" />} /> 
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/category/:id" element={<ItemListContainer greeting="Bienvenidos!" />} /> 
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>no se encontro</h1>} /> 
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
