import React, { useEffect, useState } from 'react'
import Productcard from '../productcard';


function Products({setcardlist,cardlist}) {

    const [products, setproducts] = useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/posts")
        .then((response)=>response.json())
        .then((data)=>setproducts(data.posts))
    },[])
  return (
    <div className='products'>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <Productcard key={product.id} product={product} 
            cardlist={cardlist}
            setcardlist={setcardlist}
          />
        ))}
      </div>
    </div>
  )
}

export default Products