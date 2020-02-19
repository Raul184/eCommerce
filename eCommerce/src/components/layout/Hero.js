import React from "react";

export default function Hero({children}) {
  return <div className='hero'>
    <div className="banner">
      <h1>Think , Program , Enjoy!</h1>
      <p>embrace your choices</p>
      {children}
    </div>
  </div>
}

