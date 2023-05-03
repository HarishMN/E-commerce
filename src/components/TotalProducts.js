import React, { useState } from 'react';
import products from '../constants/products'

function TotalProductsList() {
  const [products, setProducts] = useState(products);

  const totalProducts = products.length;

  return (
    <div>
      <p>Total Available Products: {products.length}</p>
      <ul>
        {products.map(product => (
          <li key={products.id}>
            <h2>{products.name}</h2>
            <p>{products.description}</p>
            <span>{products.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TotalProductsList;
