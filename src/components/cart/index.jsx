// Styles
import { useContext } from "react";
import * as Styles from "./styles";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart-item/index";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { cart } = useContext(CartContext)

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {cart.map((product) => <CartItem key={product.id} product={product} />)}
        {cart.length === 0  && <p>Seu carrinho está vazio</p>}

      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
