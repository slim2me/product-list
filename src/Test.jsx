import React from 'react';
import './App.css';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop with 16GB RAM and 512GB SSD.',
      price: 999,
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest model smartphone with a 6.5-inch display and 128GB storage.',
      price: 499,
    },
    {
      id: 3,
      name: 'Tablet',
      description: 'Lightweight tablet with 10-inch screen and 64GB storage.',
      price: 299,
    },
  ];

  return (
    <div className="app-container">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className="product-info">
              <span>{product.name}</span>
              <p>{product.description}</p>
            </div>
            <div className="price">${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
