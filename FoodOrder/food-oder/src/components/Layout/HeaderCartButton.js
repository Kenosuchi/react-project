import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [isCartButtonBump, setIsCartButtonBump] = useState(false);
  const cartCtx = useContext(CartContext);

  const cartButtonClass = `${classes.button} ${
    isCartButtonBump ? classes.bump : ''
  }`;

  const { items } = cartCtx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsCartButtonBump(true);
    const bumpTimeout = setTimeout(() => {
      setIsCartButtonBump(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimeout);
    };
  }, [items]);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={cartButtonClass} onClick={props.onShownCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
