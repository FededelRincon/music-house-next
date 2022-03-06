import { useEffect, useState } from 'react';
import '../styles/normalize.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const [shopCart, setShopCart] = useState([]);

  //getItem from localStorage
  useEffect(() => {
    const carritoLS = JSON.parse( localStorage.getItem('cart') ) ?? []
    setShopCart( carritoLS )
  }, [])
  

  //setItem to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shopCart));
  }, [shopCart])
  


  const addCart = product => {
    if(shopCart.some( article => article.id === product.id )) {
      // console.log('duplicado')
      const updatedCart = shopCart.map( article => {
        if(article.id === product.id ) {
          article.quantity = product.quantity;
        }
        return article;
      });

      setShopCart( updatedCart );


    } else {
      // console.log('nuevo producto')
      setShopCart([...shopCart, product]);
    }
  }


  const updateQuantity = (product) => {
    const updatedCart = shopCart.map( article => {
      if(article.id === product.id ) {
        article.quantity = product.quantity;
      }
      return article;
    });

    setShopCart(updatedCart);
  }


  const deleteProduct = (id) => {
    const updatedCart = shopCart.filter( article => article.id !== id)
    setShopCart(updatedCart);
  }


  return (
    <Component {...pageProps} 
      shopCart={shopCart}
      addCart={addCart}
      updateQuantity={updateQuantity}
      deleteProduct={deleteProduct}
    />
  )
}

export default MyApp
