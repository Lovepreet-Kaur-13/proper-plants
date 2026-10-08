import CartItem from "./cartItem";

export default function Cart({ cart, addToCart, removeFromCart }) {
  return (
    <section>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
