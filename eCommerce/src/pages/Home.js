import React from "react";
import Hero from '../components/layout/Hero';
import {Link } from 'react-router-dom';
import FeaturedProducts from '../components/layout/FeaturedProducts';


export default function Home() {
  return <>
    <Hero>
      <Link to='/products' className='btn btn-primary btn-hero'>
        Products
      </Link>
    </Hero>
    <FeaturedProducts /> 
  </>
}
