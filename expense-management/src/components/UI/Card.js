import './Card.css';
const Card = (pros) => {
  const classes = 'card ' + pros.className;
  return <div className={classes}>{pros.children}</div>;
};

export default Card;
