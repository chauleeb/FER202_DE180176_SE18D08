import React, { useState } from 'react';

   function NameAgeInput() {
     const [name, setName] = useState('Adam');
     const [age, setAge] = useState(35);

     return (
       <section style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '15px' }}>
         <h2>Ví dụ 2: Cập nhật giá trị name, age cho textbox</h2>
         <div>
           <input 
             type="text" 
             value={name} 
             onChange={(e) => {setName(e.target.value);
               console.log(e.target.value)
             }} 
           />
           <p>My name is {name}</p>

           <input 
             type="number" 
             value={age} 
             onChange={(e) => setAge(parseInt(e.target.value, 10))} 
           />
           <p>My age is {age}</p>
         </div>
       </section>
     );
   }

   export default NameAgeInput;