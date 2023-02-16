import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItems = [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
    (item) => (
      <li key={item.id} className={classes['cart-items']}>
        {item.name}
      </li>
    )
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$9.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
