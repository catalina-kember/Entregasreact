import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvendios!"/>}/>
        <Route path="/descrpition/:id" element={<ItemListContainer greeting="Bienvendios!"/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;