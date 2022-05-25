import React from 'react';
// import ad from './../assets/ad.mp4'
import bag from './../assets/bag.png'

const Video = () => {
  const videoStopper = (e) => {
    if (e.currentTarget.currentTime >= 58){
      // document.querySelector("div#myVideo").classList.remove('opacity-0');
      e.currentTarget.pause();
      document.querySelector('.content').classList.remove("opacity-0");
      e.currentTarget.classList.add('opacity-0');
    }
  }
  console.log("I DO NOT HOLD THE COPYRIGHTS FOR THE IMAGES AND VIDEO USED HERE. THIS IS PURELY FOR THE RECREATIONAL AND NON-PROFIT REASONS.")
  return (
    <>
      <div style={{backgroundImage: `url(${bag})`, backgroundPosition: "center", backgroundSize: "cover"}} alt="bag" id="myVideo">
        <video autoPlay muted id="myVideo" onTimeUpdate={ (e) => videoStopper(e)}>
          <source src="https://videoforawsamplifybucket.s3.ap-northeast-1.amazonaws.com/ad.mp4" type="video/mp4" />
        </video>
        <div className="content mt-5 mt-md-0 opacity-0 text-center">
          <h3 className=' d-block'>THE BAG.v22</h3>
          <a href='#' className='nav-link mt-3 fs-6 p-3 border' style={{color: "inherit"}}>PREORDER NOW!</a>
        </div>
      </div>
    </>
  );
};

export default Video;