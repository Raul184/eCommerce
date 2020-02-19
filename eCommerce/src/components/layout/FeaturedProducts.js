import React , { useContext } from "react";
import { ProductsContext } from '../../context/products';
//layout
import ProductList from './ProductList';


export default function FeaturedProducts() {
  const { featured } = useContext(ProductsContext)

  return <ProductList title='Featured products' products={featured}/>
}
