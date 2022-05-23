import React from 'react';

const Header = () => {
  
  window.addEventListener("scroll", (e)=> {
    const navbar = document.querySelector(".navbar.navbar-expand-lg.navbar-light.fixed-top")
    if (e.currentTarget.scrollY > 20) {
      const opacity = e.currentTarget.innerHeight / e.currentTarget.scrollY
      navbar.style.background = `rgba(255, 255, 255, ${ 0.2 / opacity })`;
    } else {
      navbar.style.background = "initial";
    }
  })

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-md fw-bold">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand fs-3" href="#">THE BAGS</a>
          <span className='d-md-none fs-5'>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item px-md-3">
                <a className="nav-link active" aria-current="page" href="#">products</a>
              </li>
              <li className="nav-item  px-md-3">
                <a className="nav-link" href="/upcoming">Upcoming</a>
              </li>
              <li className="nav-item  px-md-3">
                <a className="nav-link" href='/offers'>Offers</a>
              </li>
            </ul>
          </div>
          <span className='d-none d-md-block fs-5'>
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;