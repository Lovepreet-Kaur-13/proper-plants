import { useState } from "react";
import Plants from "./data";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {};
  const removeFromCart = () => {};
  return (
    <>
      <h1>Proper Plants</h1>
      <main></main>
    </>
  );
}
