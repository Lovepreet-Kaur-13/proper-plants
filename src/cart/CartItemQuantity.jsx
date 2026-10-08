export default function CartItemQuantity({ item, addToCart, removeFromCart }) {
  return (
    <div>
      <button onClick={() => addToCart(item)}>+</button>
      <span>{item.quantity}</span>
      <button onClick={() => removeFromCart(item)}>-</button>
    </div>
  );
}
