import React from 'react';
import ItemBox from './ItemBox';
const NavTag = (list) => {
  return (
    <div className="py-5" style={{backgroundColor: "#B0B1AE"}}>
      <h2 className="product-title text-dark">products</h2>
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