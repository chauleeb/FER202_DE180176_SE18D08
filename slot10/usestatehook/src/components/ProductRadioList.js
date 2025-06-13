import React, { useState } from 'react';

   function ProductRadioList() {
     // eslint-disable-next-line no-unused-vars
     const [products, setProducts] = useState([
       { id: 1, name: 'Sản phẩm A' },
       { id: 2, name: 'Sản phẩm B' },
       { id: 3, name: 'Sản phẩm C' },
     ]);

     const [selectedProduct, setSelectedProduct] = useState(null);

     const handleRadioChange = (event) => {
       const productId = parseInt(event.target.value, 10);
       setSelectedProduct(productId);
     };

     return (
       <>
         <style>
           {`
             .product-radio-list {
               padding: 15px;
               font-family: Arial, sans-serif;
               background-color: #fff;
               border: 1px solid #ddd;
               border-radius: 5px;
               margin-bottom: 20px;
             }

             .product-radio-list h2 {
               margin-top: 0;
               color: #333;
             }

             .product-radio-list label {
               margin-left: 8px;
               font-size: 16px;
             }

             .product-radio-list div {
               margin-bottom: 10px;
             }

             .product-radio-list p {
               margin-top: 10px;
               font-weight: bold;
               color: #333;
             }
           `}
         </style>
         <div className="product-radio-list">
           <h2>Ví dụ 4: Hiển thị các sản phẩm được chọn khi click vào các radio button</h2>
           <div>
             {products.map(product => (
               <div key={product.id}>
                 <input
                   type="radio"
                   id={product.id}
                   value={product.id}
                   checked={selectedProduct === product.id}
                   onChange={handleRadioChange}
                   name="product"
                 />
                 <label htmlFor={product.id}>{product.name}</label>
               </div>
             ))}

             {selectedProduct !== null && (
               <p>Bạn đã chọn sản phẩm: {products.find(p => p.id === selectedProduct).name}</p>
             )}
           </div>
         </div>
       </>
     );
   }

   export default ProductRadioList;