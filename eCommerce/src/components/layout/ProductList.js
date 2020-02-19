import React from "react";
import PropTypes from 'prop-types'
import ProductItem from './ProductItem';


export default function ProductList({ title , products }) {
  console.log(products);
  return <section className="section">
    <h2>{title}</h2>
    <div className="products-center">
      { products.length > 0 && products.map(
          el => <ProductItem key={el.id} {...el} /> 
        )
      }
    </div>
  </section>
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
}
