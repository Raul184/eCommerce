import React , { useContext } from "react";
// Url params
import { useParams } from "react-router-dom";
// Context
import { ProductsContext } from '../context/products';
import { CartContext } from '../context/cart';
import { useHistory } from 'react-router-dom';

export default function ProductDetails() {
  // dinamic URL params
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductsContext);
  const { addItem } = useContext(CartContext);
  
  const product = products.find(el => el.id === parseInt(id) )
  const { image, title , price , description } = product;
  return <>
    { product !== undefined && <section className="single-product">
      <img src={image} alt="" className="single-product-image"/>
      <article>
        <h1>{title}</h1>
        <h2>$ {price}</h2>
        <p>{description}</p>
        <button 
          className="btn btn-primary btn-block"
          onClick={() => {
            addItem(product)
            history.push('/cart')
          }}
        >
          Add to Cart
        </button>
      </article>
    </section>
        
    }
  </>;
}
