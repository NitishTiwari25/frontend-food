import React, { useState, useRef, useEffect } from 'react'
import { useCart, useDispatchCart } from './Contextreducer';


export default function Card(props) {
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceoptions = Object.keys(options);

    let data = useCart(); // this is from context reducer
    const priceref = useRef();
    const [qty, setqty] = useState(1)
    const [size, setsize] = useState("")
    const handleaddtocart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === props.fooditem._id) {
                food = item;
                break;
            }
        }

        //for updating the item in cart
        if (food != []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.fooditem._id, price: finalprice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.fooditem._id, name: props.fooditem.name, price: finalprice, qty: qty, size: size })
                return
                // await console.log(data)
            }
        }
        await dispatch({ type: "ADD", id: props.fooditem._id, name: props.fooditem.name, price: finalprice, qty: qty, size: size })
        return
    }


    //     //     else if (food.size !== size) {

    //     // await dispatch({type:"ADD",id:props.fooditem.id,name:props.fooditem.name,price:finalprice,qty:qty,size:size})
    //     //     }


    //          console.log(data)

    let finalprice = qty * parseInt(options[size]);

    useEffect(() => {
        setsize(priceref.current.value)
    }, [])

    return (
        <>
            <div className="card col-3 m-5" style={{ "width": "18rem", "maxHeight": "360px" }} >
                <img src={props.fooditem.img} className="card-img-top" alt="..." style={{ height: "120px", objectfit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.fooditem.name}</h5>

                    <div className="container w-100">
                        <select className="m-2 h-100 bg-success rounded" onChange={(e) => setqty(e.target.value)} >

                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>


                                )

                            })}
                        </select>
                        <select className="m-2 h-100 bg-success rounded" ref={priceref} onChange={(e) => setsize(e.target.value)}>
                            {/* ref={priceref} onChange={(e)=>setsize(e.target.value)} */}
                            {priceoptions.map((data) => {
                                return <option key={data} value={data}>
                                    {data}
                                </option>
                            })}

                        </select>
                        <div className='d-inline h-100 '>
                            ${finalprice}/-
                        </div>
                    </div>
                    <hr>
                    </hr>
                    <button className='btn btn-success justify-content-center mx-2' onClick={handleaddtocart} >


                        Add to Cart
                    </button>


                </div>
            </div>

        </>
    )
}

