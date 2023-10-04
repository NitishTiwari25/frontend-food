import React from 'react'

export default function Carousel() {
  return (

    <>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">
          <div className='carousel-caption' style={{zIndex:"10"}}>
          <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
            </form>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x250/?burger" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x250/?pastry" className="d-block w-100 " alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x250/?burger" className="d-block w-100 " alt="..." />
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
           
          </div>
        
        </div>

      </>

      )
}
