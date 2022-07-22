import React from 'react';
import './Header.css';

export default function Header(props) {
    const { cartItems, openCart } = props;
    return (
        <header className='d-flex flex-wrap justify-content-center py-3 mb-4'>
            <div className='d-flex align-items-center mb-3 mb-md-0 me-md-auto'>
                <a className='text-decoration-none text-dark ms-4' href="#/">
                    <span className='fs-4'>CharityPhilippines.org</span>
                </a>
            </div>
            <div className='d-flex align-items-center mb-3 mb-md-0 ms-md-auto'>
                <button className="btn position-relative" onClick={() => { openCart(true) }}>
                    <i className="bi bi-cart-plus-fill fs-2"></i>
                    <span id="cartBadge" className="position-absolute translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </button>
            </div>
        </header>
    );
};