import React from "react";
import { Link } from "react-router-dom";
import './Shop.css';


const ProductCard = ({ product }) => {

    const addToCart = () => {
        
        // JSON.parse kako bi pretvorili iz stringa
        // JSON.stringify kako bi pretvorili u string

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        //array1.find(element) => element > 10);
        const productInCart = cart.find((item) => item.id === product.id);
        if(productInCart) {
            productInCart.quantity +=1;
        } else {
        cart.push({
            id : product.id,
            thumbnail : product.thumbnail,
            title : product.title,
            price : product.price,
            quantity : 1
        });
    }

        localStorage.setItem('cart', JSON.stringify(cart));
    	alert('Dodano u košaricu');
        
    }

    return (
        <div class="productCard card" key={product.id}>
            <div class="product-image">
            <Link to={'/shop' + product.id}>    
                <img src={product.thumbnail} className="card-img" alt={product.title} />
            </Link>
            <Link to={'/shop' + product.id}>
                <h4 className="card-title">{product.title}</h4>
            </Link>
                <p className="card-text">{product.description}</p>
                <button onClick={addToCart} className="btn btn-success">{product.price} EUR</button>
            </div>
        </div> 
    )
}

export default ProductCard;