import React from 'react';
import ItemBox from './ItemBox';
const NavTag = ({list, title}) => {
  return (
    <div className="py-5 bg-secondary nav-tag" id={title}>
      <h2 className="product-title">{title}</h2>
      <div className="container py-5">
        <div className="d-flex justify-content-around align-items-end flex-wrap text-secondary">
          { list.map((item) => (
              < ItemBox item= {item} key={item.title} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NavTag;