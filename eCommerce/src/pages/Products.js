import React , { useContext } from "react";
import { ProductsContext } from '../context/products';
//layout
import Loading from '../components/layout/Loading';
import ProductList from '../components/layout/ProductList';


export default function Products() {
  const { loading , products } = useContext(ProductsContext);
  console.log(products);
  return <>
    { loading ? 
      <Loading /> 
      : 
      <ProductList title="Available products" products={products}/> 
    }
  </>;
}
