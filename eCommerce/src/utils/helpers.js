const config = require('../utils/bro.json');

// helper functions
export const getLocalStorage = () => {
  return localStorage.getItem('cart') ? 
    JSON.parse(localStorage.getItem('cart'))
    :
    []
}

 export const flattenProducts = data => {
   return data.map( el => {
      //claudinary
      // let image = el.image.url;
      // local setup for NO deploym. purposes
      let image = `${config.API_URL}${el.image.url}`
      return { ...el , image }
   })
 }