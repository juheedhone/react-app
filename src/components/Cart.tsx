interface Props {
  cartItems: string[];
  onClearCart: () => void;
  onAddProduct: () => void;
}
const Cart = ({ cartItems, onClearCart, onAddProduct }: Props) => {
  return (
    <div>
      <p>Cart</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClearCart}>clear</button>
      <button onClick={onAddProduct}>Add</button>
    </div>
  );
};

export default Cart;
