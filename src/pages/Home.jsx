import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене min', type: 'pricemin' },
  { name: 'цене max', type: 'pricemax' },
];

const Home = () => {
  const { pizzas } = useSelector((state) => state.pizza);
  const [sortBy, setSortBy] = useState('popular');
  const [category, setCategory] = useState(null);

  const onSelectCategory = (index) => {
    setCategory(index);
  };
  const onSelectSortType = () => {};
  let pizzaCat =
    categoryNames[category] !== undefined
      ? pizzas.filter((pizza) => pizza.category == category)
      : pizzas;

  let sortedPizzas = [...pizzaCat].sort((a, b) => {
    if (sortBy === 'pricemax') {
      return b.price - a.price;
    } else if (sortBy === 'pricemin') {
      return a.price - b.price;
    }
  });

  return (
    <div>
      <div className="container">
        <div className="content__top">
          <Categories
            categoryNames={categoryNames}
            activeCategory={category}
            onClickCategory={onSelectCategory}
            setCategory={setCategory}
          />
          <SortPopup
            sortItems={sortItems}
            activeSortType={sortBy}
            setSortBy={setSortBy}
            sortBy={sortBy}
            onClickSortType={onSelectSortType}
          />
        </div>
        <h2 className="content__title">Все пиццы</h2>

        <div className="content__items">
          <>{sortedPizzas && sortedPizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)} </>
        </div>
      </div>
    </div>
  );
};

export default Home;
