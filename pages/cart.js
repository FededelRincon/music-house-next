import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Layout from "../components/Layout";
import styles from '../styles/Cart.module.css';

const cart = ({ shopCart, updateQuantity, deleteProduct }) => {

    console.log(shopCart)

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalAmount = shopCart.reduce( (total, product) => total + (product.price / product.quantity), 0 );
        setTotal(totalAmount);

    }, [shopCart])
    

    return (
        <>
            <Layout page={'cart shopping'}>
                <h1 className="heading">Carrito</h1>
                <main className={`container ${styles.content}`}>
                    <div className={styles.shopCart}> 
                        <h2>Articles</h2>
                    {/* aca comienza mi error con el key.... */}
                        {shopCart.length === 0 ? 'Empty Cart' : (
                            shopCart.map( product => (
                                <div key={shopCart.id} className={styles.product}>
                                    <div>
                                        <Image 
                                            layout="responsive"
                                            width={250}
                                            height={500} 
                                            src={product.picture}
                                            alt={product.name}
                                        />
                                    </div>

                                    <div>
                                        <p className={styles.name}>{product.name}</p>
                                        {/* <p className={styles.price}>$ <span>{product.price}</span></p> */}

                                        <div className={styles.quantity}>
                                            {/* <p>How many Pays: {product.quantity}</p> */}
                                            <p>How many Pays: </p>
                                            <select
                                                value={product.quantity}
                                                className={styles.select}
                                                onChange={ (e) => 
                                                    updateQuantity({
                                                        quantity: e.target.value,
                                                        id: product.id,
                                                    }) 
                                                }
                                            >
                                                {/* <option value="0">--Select an option--</option> */}
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="6">6</option>
                                            </select>
                                        </div>
                                        
                                        <p className={styles.subtotal}> Total: {product.quantity} pays of $ <span>{(product.price / product.quantity).toFixed(2)}</span></p>
                                    </div>

                                    <button
                                        type="button"
                                        className={styles.delete}
                                        onClick={() => deleteProduct(product.id) }
                                    >
                                        X
                                    </button>
                                </div>
                            ))
                        )}    
                    </div>

                    <div className={styles.resume}>

                        {total > 0 ? (
                            <>
                                <h3>Order summary</h3>
                                <p>Total Amount: $ {total}</p>
                            </>
                        ) : (
                            <p>There are no products</p>
                        )}
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default cart