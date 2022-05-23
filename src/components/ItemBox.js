import React from 'react';

const ItemBox = ({ item }) => {
  return (
    <div className="product-box">
      <div className="product-image">
        <img src={item.image} width="200px" alt="woman bag" />
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-cart-plus"></i></a>
      </div>
      <div className="product-desc p-3">
        <h2>{item.title}</h2>
        <p className=" fs-5">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default ItemBox;