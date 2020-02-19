// cart context
import React , { createContext , useState , useEffect } from 'react'
import { getLocalStorage } from '../utils/helpers';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, setState] = useState({
    cart:  getLocalStorage() ,
    total: 0 ,
    cartItems: 0
  })
  const { cart , total , cartItems } = state;
  
  useEffect(() => {
    localStorage.setItem("cart" , JSON.stringify(cart));
    // Items amount
    let items = cart.reduce( (acc , cur ) => acc += cur.amount  
    , 0 )
    // Items $ Total
    let total$ = cart.reduce( (acc , cur) => {
      return ( acc += cur.price * cur.amount );
    } , 0 )
    total$ = parseFloat(total$.toFixed(2));
    setState({ 
      ...state , 
      cartItems: items ,  
      total: total$ 
    })
  }, //eslint-disable-next-line
  [cart])
  
  //Remove Item from Cart
  const removeItem = id => {
    setState({
      ...state ,
      cart: state.cart.filter( el => el.id !== id)
    })
  }
  //Add Item to Cart
  const addItem = item => {
    const { id , image , title , price } = item;
    const add = [ ...cart].find(el => el.id === id )
    if(add){
      increaseItemAmount(id);
      return ;
    }
    else{
      const toBeAdded = { id , title , price , amount: 1 , image }
      setState({
        ...state ,
        cart: [ ...state.cart , toBeAdded ]
      })
    }  
  }
  //Increase Item amount in the Cart
  const increaseItemAmount = id => {
    const nueCart = [...cart].map(el => {
      return el.id === id ?
        { ...el , amount: el.amount + 1 }
        :
        { ...el}
    });
    setState({ ...state , cart: nueCart })
  }
  //Decrease Item amount in the Cart
  const decreaseItemAmount = id => {
    const nueCart = [...cart].map(el => {
      return el.id === id ?
        { ...el , amount: el.amount - 1 }
        :
        { ...el}
    });
    setState({ ...state , cart: nueCart })
  }
  //Clear Cart
  const clearCart = () => {
    localStorage.clear();
    setState({
      ...state ,
      cart: []
    })
  }

  return <CartContext.Provider value={{
    cart ,
    total ,
    cartItems ,
    removeItem ,
    addItem ,
    increaseItemAmount ,
    decreaseItemAmount ,
    clearCart
  }}>
    {children}    
  </CartContext.Provider>
}


