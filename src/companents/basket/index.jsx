import React from 'react'

function Basket({cardlist,setcardlist}) {

    const decrease=(obj)=>{
        if(obj.count===1){
            setcardlist(cardlist.filter(item=>item.id!==obj.id))
        }else{
            obj.count--
            setcardlist([...cardlist])

        }
       

    }

    const increase=(obj)=>{
        obj.count++
        setcardlist([...cardlist])


    }
  return (
    <div className='basket-product'>
        <h2>Basket</h2>
       {
        cardlist.map(item=> <div className='b-product' key={item.id}>
            <h4>{item.title}</h4>
            <div>
                <button onClick={()=>decrease(item)}>-</button>
                <span>{item.count}</span>
                <button onClick={()=>increase(item)}>+</button>
            </div>
        </div>)
       }
    </div>
  )
}

export default Basket