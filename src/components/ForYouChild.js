import React from 'react';

const ForYouChild = ({ desc, id }) => {
  console.log(id);
  return (
    <div className="row p-2 mx-0 p-md-0">  
      <div className={`p-5 col-12 col-md-6 ${ id / 2 !== 0 && "ms-md-auto"} bg-secondary opacity-50 d-inline-block`}>
        <h1 className="text-white">The Bag</h1>
        <h4>{desc}</h4>
      </div>
    </div>
  );
};

export default ForYouChild;