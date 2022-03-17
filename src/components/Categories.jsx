import React, { memo } from 'react';


const Categories = memo(({ categoryNames, onClickCategory, activeCategory, setCategory }) => {



  

  return (
    <div className="categories">
      <ul>
      <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
       
          >
          Все
        </li>
        {categoryNames.map((cat, index) => (
          <li
            onClick={() => onClickCategory(index)}
          
      
            key={`${cat}_${index}`}
            className={activeCategory === index ? 'active' : ''}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Categories;
