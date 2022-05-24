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
    // const navLinks = navbar.querySelectorAll('.nav-link');
    // navLinks.forEach((navLink) => {
    //   const itemContainer = (document.querySelector(`#${navLink.dataset.id}`));
    //   console.log(itemContainer);
    //   if ( itemContainer && itemContainer.offsetHeight <= 50) {
    //     console.log("less than 50")
    //     if (!navLink.classList.contains("active")) navLink.classList.add("active");
    //   }
    //   if ( itemContainer && itemContainer.offsetHeight <= (window.innerHeight / 2)) {
    //     console.log("more than half")
    //     if (navLink.classList.contains("active")) navLink.classList.remove("active");
    //   }
    // })
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
                <a className="nav-link" aria-current="page" href="#" data-id="products">Products</a>
              </li>
              <li className="nav-item  px-md-3">
                <a className="nav-link" href="/upcoming" data-id="upcomings">Upcoming</a>
              </li>
              <li className="nav-item  px-md-3">
                <a className="nav-link" href='/offers' data-id='offers'>Offers</a>
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