import CartItemQuantity from "./CartItemQuantity";

export default function CartItem({ item, addToCart, removeFromCart }) {
  return (
    <section>
      <li>
        <div>
          {item.image}
          {item.name}
        </div>
        <CartItemQuantity
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </li>
    </section>
  );
}
