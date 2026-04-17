import React from 'react'

const Filterproduct = () => {

  let product = [
    {id:1,title:"Iphone-15",category:"mobile", price:50000},
    {id:2,title:"hp",category:"laptop", price:40000},
    {id:3,title:"sony",category:"camera", price:30000},
    {id:4,title:"nikon",category:"camera", price:25000},
  ];

  const Filterproduct = product.filter((data) => data.category === "camera");

  console.log(Filterproduct);

  return (
    <div>
      {
      Filterproduct.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <h2>{data.price}</h2>
        </div>
      ))
      }
    </div>
  );
}

export default Filterproduct
