import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../asserts/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
        <HeaderCartButton onShownCart={props.onShownCart}>
          Cart
        </HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of food'></img>
      </div>
    </Fragment>
  );
};

export default Header;
