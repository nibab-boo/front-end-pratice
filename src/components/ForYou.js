import React from 'react';
import ForYouChild from './ForYouChild';
const forYouVision = [
  "For You Who Carry With Style.",
  "For You Who Wants More."
]
const ForYou = () => {
  return (
    <div className="py-5 for-you">
      <h2 className="main-title text-dark">for you</h2>
      <div className="container py-5">
        {forYouVision.map((desc, index) => {
          return(
            <ForYouChild desc={desc} id={index} key= {desc} />
          )
        })}
      </div>
    </div>
  );
};

export default ForYou;