import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Deserts from "./components/Deserts";
import Cart from "./components/Cart";
import {useState} from "react";

function App() {

    const [cart, setCart] = useState([]);

    const deserts = [
        {id:1, img: './images/image-waffle-desktop.jpg', name: 'Waffle', description: 'Waffle with Berries', price: 6.5},
        {id:2, img: './images/image-creme-brulee-desktop.jpg', name: 'Crème Brülée', description: 'Vanilla Bean Crème Brülée', price: 7.00},
        {id:3, img: './images/image-macaron-desktop.jpg', name: 'Macaron', description: 'Macaron Mix of Five', price: 8.00},
        {id:4, img: './images/image-tiramisu-desktop.jpg', name: 'Tiramisu', description: 'Classic Tiramisu', price: 5.50},
        {id:5, img: './images/image-baklava-desktop.jpg', name: 'Baklava', description: 'Pistachio Baklava', price: 4.00},
        {id:6, img: './images/image-meringue-desktop.jpg', name: 'Pie', description: 'Lemon Meringue Pie', price: 5.00},
        {id:7, img: './images/image-cake-desktop.jpg', name: 'Cake', description: 'Red Velvet Cake', price: 4.50},
        {id:8, img: './images/image-brownie-desktop.jpg', name: 'Brownie', description: 'Salted Caramel Brownie', price: 5.50},
        {id:9, img: './images/image-panna-cotta-desktop.jpg', name: 'Panna Cotta', description: 'Vanilla Panna Cotta', price: 6.50},
    ];

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

  return (
    <div className="App">
      <Header className={'HD'} >
      <Deserts onAddToCart={handleAddToCart}  deserts={deserts} />
      <Cart cart={cart}/>
      </Header>
    </div>
  );




}

export default App;
