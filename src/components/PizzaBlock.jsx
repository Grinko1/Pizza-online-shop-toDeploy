import React, { useState } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const PizzaBlock = ({id, imageUrl, name, price, types, sizes,rating,category, addedCount, obj }) => {
  const avaibleTypes = ['тонкое', 'традиционное'];
  const avaibleSizes = [26, 30, 40];
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);
  let [click, setClick] = useState(0)



  const dispatch = useDispatch()

 const count = 0

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  const uid = new Date().getUTCMilliseconds()
  const addToCartF = () => {
    setClick(++click)
      dispatch(addToCart({id, imageUrl, name, price, types, sizes,rating, category, size:avaibleSizes[activeSize], type:avaibleTypes[activeType], count, click, uid }))
  
  }
  
  return (
    <>
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {avaibleTypes.map((type, index) => (
              <li
                className={cn({
                  active: activeType === index,
                  disable: !types.includes(index),
                })}
                onClick={() => onSelectType(index)}
                key={type}>
                {type}
              </li>
            ))}
          </ul>
          <ul>
            {avaibleSizes.map((size, index) => (
              <li
                className={cn({
                  active: activeSize === index,
                  disable: !sizes.includes(size),
                })}
                onClick={() => onSelectSize(index)}
                key={size}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add" 
          onClick={() => addToCartF()}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            
            { click > 0 && <i>{click}</i>}
          </div>
        </div>
      </div>{' '}
    </>
  );
};
// PizzaBlock.propTypes = {
//   name: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   types: PropTypes.object.isRequired,
//   sizes: PropTypes.objectOf(PropTypes.number).isRequired
// }
export default PizzaBlock;
