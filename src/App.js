import Header from './components/header/Header';
import Main from './components/main/Main';
import React, { useState } from 'react';
import Cart from './components/cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isShowCartModal, setIsShowCartModal] = useState(false);
  const [addError, setAddError] = useState('');

  const onAdd = (project) => {
    const exist = cartItems.find(x => x.id == project.id);
    if (exist) {
      setAddError('Already added ' + project.name +' project to the giving basket.')
    } else {
      setCartItems([...cartItems, { ...project }]);
      setAddError('')
    }
  };

  const onRemove = (project) => {
    setCartItems(cartItems.filter((x) => x.id !== project.id));
  };

  return (
    <div className="container">
      <Header cartItems={cartItems} openCart={setIsShowCartModal} />
      {isShowCartModal && <Cart cartItems={cartItems} handleClose={setIsShowCartModal} onRemove={onRemove} />}
      {addError &&
        <div className="alert alert-info" role="alert">
          {addError}
        </div>
      }
      <Main onAdd={onAdd} />
    </div>
  );
}

export default App;
