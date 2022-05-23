import React from 'react';
const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-md fw-bold">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand fs-3" href="#">THE BAGS</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item px-md-3">
                <a class="nav-link active" aria-current="page" href="#">products</a>
              </li>
              <li class="nav-item  px-md-3">
                <a class="nav-link" href="/upcoming">Upcoming</a>
              </li>
              <li class="nav-item  px-md-3">
                <a class="nav-link" href='/offers'>Offers</a>
              </li>
            </ul>
          </div>

          <div className='fs-5'>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;