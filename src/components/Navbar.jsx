import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {BsCart3} from 'react-icons/bs';
import Style from '../styles/navbar.module.css';
import { CartContext } from '../context/CartContext';


function Navbar() {
  const {product} = useContext(CartContext);
  return (
    <div className={Style.mainNavDiv}>
        <div>
            <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
</svg>TeeRex Store</h3>
        </div>
        <div className={Style.cartMainDiv}>
            <Link to="/"><h3>Products</h3></Link>
            <div className={Style.cart}>
            <Link to="/cart"><BsCart3 style={{width:'40px', height:'20px'}}/></Link>
            <h4>{product.length}</h4>
            </div>
        </div>
    </div>
  )
}

export default Navbar