import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';
import './ProductList.css'; // コンポーネント固有のスタイル用CSSファイルをインポート

const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledProducts, setDisabledProducts] = useState([]); // 無効な製品を保存するための状態

  const products = [
    { id: 1, name: '製品A', price: 60 },
    { id: 2, name: '製品B', price: 75 },
    { id: 3, name: '製品C', price: 30 },
  ];

  const handleAddToCart = product => {
    dispatch(addItemToCart(product));
    setDisabledProducts([...disabledProducts, product.id]); // 製品を無効としてマーク
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">製品</h2>
      <ul className="product-list-items">
        {products.map(product => (
          <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button 
              className={`add-to-cart-btn ${disabledProducts.includes(product.id) ? 'disabled' : ''}`} 
              onClick={() => handleAddToCart(product)}
              disabled={disabledProducts.includes(product.id)} // 製品が無効な製品に含まれている場合、ボタンを無効にする
            >
              カートに追加
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;