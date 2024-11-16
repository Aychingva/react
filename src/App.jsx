import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './companents/products'
import Basket from './companents/basket'

function App() {
  const[cardlist,setcardlist]=useState([])
  return (
    <>
      <section>
        <Products
          cardlist={cardlist}
          setcardlist={setcardlist}
        />
        <Basket
           cardlist={cardlist}
           setcardlist={setcardlist}
        />
      </section>
    </>
  )
}

export default App
