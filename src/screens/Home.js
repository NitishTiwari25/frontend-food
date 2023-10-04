import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/navbar';
import Card from '../components/card';
//import Carousel from '../components/Carousel';

export default function Body() {
  const [search,setsearch]=useState('');
  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData2", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setfooditem(response[0])
    setfoodcat(response[1])
    //console.log(response[0],response[1]);

  }

  useEffect(() => {
    loaddata()
  }, [])





  return (
    <>
      <div><Navbar /></div>


      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" id="carousel">

          <div className='carousel-caption' style={{zIndex:"10"}}>
         
         
          <div className="d-flex justify-content-center " >
              <input className="div-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>

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

      
      
      
      <div className='conatiner'>
        {
          foodcat != []
            ? foodcat.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr />
                  {fooditem !=[] ?
                    fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                      .map(filteritems => {
                        return (
                          <div key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                             <Card fooditem={filteritems}
                          
                            options={filteritems.options[0]}
                            
                             > </Card>
                            
                          </div>
                        )
                        } 
                      ) : <div>No such food found</div>}
                </div>
              )
            })
            :""
          }
      


        </div>
      <div><Footer /></div>


    </>

  )
}
