import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItemsArr;
    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemsArr = [...state.items];
      updatedItemsArr[existingCartItemIndex] = updatedItem;
    } else {
      updatedItemsArr = state.items.concat(action.item);
    }
    return {
      items: updatedItemsArr,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE_ITEM') {
    const itemRemovedIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let updatedItemsArr = [...state.items];
    let existingCartItem = updatedItemsArr[itemRemovedIndex];
    console.log(existingCartItem.amount);
    if (existingCartItem.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItemsArr[itemRemovedIndex] = updatedItem;
    } else {
      updatedItemsArr.splice(itemRemovedIndex, 1);
    }
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    return {
      items: updatedItemsArr,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
