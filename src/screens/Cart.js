import React from 'react'
// //import Delete from '@material-ui/icons/Delete'
 import { useCart, useDispatchCart } from '../components/Contextreducer';
 // import trash from "../trash.svg"
 export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3' style={{"color":"white"}}>The Cart is Empty!</div>
      </div>
    )
  }

    // const handleRemove = (index)=>{
    //   console.log(index)
    //   dispatch({type:"REMOVE",index:index})
    // }

const handleCheckOut = async () => {
  let userEmail = localStorage.getItem("userEmail");
   console.log(data,localStorage.getItem("userEmail"),new Date())  //orderData
  
  //error
  // "http://localhost:5000/api/
   let response = await fetch("http://localhost:5000/api/orderData", {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      order_data: data,
      email: userEmail,
      order_date: new Date().toDateString()
    })
  });
  console.log("JSON RESPONSE:::::", response)
  if (response.status === 200) {
    dispatch({ type: "DROP" })
  }
}

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
   return (
    <div>

      {/* {console.log(data)} */}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4' >
            <tr>
              <th style={{"color":"white"}} scope='col' >#</th>
              <th style={{"color":"white"}} scope='col' >Name</th>
              <th style={{"color":"white"}} scope='col' >Quantity</th>
              <th style={{"color":"white"}} scope='col' >Option</th>
              <th style={{"color":"white"}} scope='col' >Amount</th>
              <th style={{"color":"white"}} scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' style={{"color":"white"}}>{index + 1}</th>
                <td style={{"color":"white"}}>{food.name}</td>
                <td style={{"color":"white"}}>{food.qty}</td>
                <td style={{"color":"white"}}>{food.size}</td>
                <td style={{"color":"white"}}>{food.price}</td>
                <td ><button type="button" className="btn p-0"><img   alt="delete" onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td>
                </tr>
            // src={trash}
            
            ))}
           </tbody>
         </table>
         <div><h1 className='fs-2'style={{"color":"white"}}>Total Price: {totalPrice}/-</h1></div>
         {/* <div><h1 className='fs-2'>Total Price: /-</h1></div> */}
         <div>
           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        
         </div>
       </div>

     </div>
   )
 }
