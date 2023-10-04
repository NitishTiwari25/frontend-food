import React, { createContext, useContext, useReducer } from 'react'

// use of usecontext is that you dont make the props you directly pass context provider 
//using useContext

//useReducer is used when we store more than one state of the thing

const CartStateContext = createContext();
const CartDispatchContext = createContext();
// creating the context
// then to provide provider to provide the service of use one thing in another file

const reducer = (state, action) => {
    switch (action.type) {
        //action.type means which dispatch is performed
        case "ADD":
            return [...state, {
                id: action.id, name: action.name, qty: action.qty,
                size: action.size, price: action.price, img: action.img
            }]

            case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index, 1) //splice is inbuid function
                return newArr;

            case "UPDATE":
                let arr=[...state]
                arr.find((food,index)=>{
                    if (food.id === action.id) {
                        console.log(food.qty, parseInt(action.qty), action.price + food.price)
                        arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                    }
                    return arr
                })
                return arr
                
            case "DROP":
                let emptyArray=[]
                return emptyArray
        default:
            console.log("error in reducer");
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    // dispatch is used  has many types of functions perform
    //intial value of state is empty and a function reducer which convert the state

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}

// exports all the usecontext file in this way
export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);