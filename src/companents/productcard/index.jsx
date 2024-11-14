import React from 'react'

function Productcard({product,cardlist,setcardlist}) {
    const addtocard=()=>{
        const found=cardlist.find(item=>item.id===product.id)
        if(found){
            found.count++
            setcardlist([...cardlist])
        }
         
        else{
            setcardlist([...cardlist,{
                ...product,
                count:1}
            ])
        }
        
    }
  return (
    <div className='product-card'>
        <p>id:{product.id}</p>
        <h6>title:{product.title}</h6>
        {/* <h6>body:{product.body}</h6> */}
        <p>likes:{product.reactions.likes}</p>
        <p>views:{product.views}</p>
        <button onClick={addtocard}>+ Add</button>
    </div>
  )
}

export default Productcard