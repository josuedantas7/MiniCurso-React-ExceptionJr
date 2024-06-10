import { useContext, useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { login, logout, isLogged } = useContext(AuthContext)

  const { totalItens } = useContext(CartContext)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    login()
  }

  const handleLogoutClick = () => {
    logout()
  }


  return (
    <Styles.Container>
      <Styles.Logo>Exception Jr</Styles.Logo>
      <Styles.Buttons>
        {isLogged ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}

        <div style={{position: 'relative'}} onClick={handleCartClick}>
          Carrinho
          <p style={{position: 'absolute', top: -20, right: 0, color: 'red'}}>
            {totalItens > 0 && totalItens}
          </p>
        </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
