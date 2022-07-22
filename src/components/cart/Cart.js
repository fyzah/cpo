import React from 'react';
import "./Cart.css";

export default function Cart(props) {
    const { cartItems, handleClose, onRemove } = props;

    console.log(cartItems);
    return (
        <React.Fragment>
            <div className="bg"></div>
            <div className="modalBg">
                <div className="modalContainer">
                    <div className="title">
                        <h3><i className="bi bi-cart-plus-fill"></i> Giving Basket Contents</h3>
                    </div>
                    <div className="body">
                        <table className="table fs-6">
                            <thead>
                                <tr>
                                    <th scope="col">Project Name</th>
                                    <th scope="col">Charity Name</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length === 0 && <tr>
                                        <td colSpan="3">No Projects Donated</td>
                                    </tr>}
                                {cartItems && cartItems.map((item) => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.charityDetails.name}</td>
                                        <td><button type="button" className="btn btn-danger me-2" onClick={() => { onRemove(item) }}>Remove</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="footer">
                        <button type="button" className="btn btn-danger me-2" onClick={() => { handleClose(false) }}>Close</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};