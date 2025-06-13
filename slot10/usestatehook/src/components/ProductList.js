import React, { useState } from 'react';

   function ProductList() {
     // eslint-disable-next-line no-unused-vars
     const [products, setProducts] = useState([
       { id: 1, name: 'Sản phẩm A' },
       { id: 2, name: 'Sản phẩm B' },
       { id: 3, name: 'Sản phẩm C' },
     ]);

     const [selectedProducts, setSelectedProducts] = useState([]);

     const handleCheckboxChange = (event) => {
       const productId = parseInt(event.target.value, 10);
       if (event.target.checked) {
         setSelectedProducts([...selectedProducts, productId]);
       } else {
         setSelectedProducts(selectedProducts.filter(id => id !== productId));
       }
     };

     return (
       <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
         <h2>Ví dụ 3: Hiển thị các sản phẩm được chọn khi click vào các checkbox</h2>
         <div>
           {products.map(product => (
             <div key={product.id}>
               <input
                 type="checkbox"
                 id={product.id}
                 value={product.id}
                 checked={selectedProducts.includes(product.id)}
                 onChange={handleCheckboxChange}
               />
               <label htmlFor={product.id}>{product.name}</label>
             </div>
           ))}

           {selectedProducts.length > 0 && (
             <p>Bạn đã chọn các sản phẩm: {selectedProducts.map(id => products.find(p => p.id === id).name).join(', ')}</p>
           )}
         </div>
       </section>
     );
   }

   export default ProductList;