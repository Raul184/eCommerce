import React from "react";
import Gif from '../../assets/justGif.gif';


export default function Loading() {
  return <div className='loading'>
    <h2>Loading..</h2>
    <img src={Gif} alt="loading gif"/>
  </div>;
}
