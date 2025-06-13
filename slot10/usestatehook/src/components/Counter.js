import React, { useState } from 'react';

   function Counter() {
     const [count, setCount] = useState(0);

     return (
       <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
         <h2>Ví dụ 1: Cập nhật số lần bấm nút</h2>
         <div>
           <p>You clicked {count} times</p>
           <button onClick={() => setCount(count + 1)}>
             Click me
           </button>
         </div>
       </section>
     );
   }

   export default Counter;