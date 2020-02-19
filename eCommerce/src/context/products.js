import React , { createContext , useState , useEffect } from 'react';
import axios from 'axios';
import { flattenProducts } from '../utils/helpers';
const config = require('../utils/bro.json');

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
  const [ state , setState ] = useState({
    loading: false ,
    products: [] ,
    featured: []
  });
  const { loading , products , featured } = state;

  useEffect(() => {
    console.log(`${config.API_URL}/products`);
    // Goes to True
    setState({ ...state , loading: true })
    axios.get(`${config.API_URL}/products`)
    .then( 
      el => setState({ 
        ...state , 
        products: flattenProducts(el.data) , 
        loading: false ,
        featured: flattenProducts(el.data).filter(el => el.featured === true )
      })
    ) 
  }, //eslint-disable-next-line 
  [])
  
  return (
    <ProductsContext.Provider value={{
      products ,
      loading ,
      featured
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
