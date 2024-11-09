import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "./main.css"




// function Book(){
//   return <div>
//     <img src="https://static.wixstatic.com/media/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg/v1/fill/w_576,h_713,al_c,lg_1,q_85,enc_auto/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg"></img>
//     <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
//     <h4>Lorem ipsum dolor sit amet.</h4>
//   </div>

// }
// createRoot(document.getElementById('root')).render(
//   <div className='main'>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//   </div>
 
   
  
// )


// function B1({imgSrc,title,description}){
//   return(
//     <div>
//       <img src={imgSrc}></img>
//       <h3>{title}</h3>
//       <h4>{description}</h4>
//     </div>
//   )

// }


// createRoot(document.getElementById('root')).render(
//   <div className="main">
//     <Book1
//       imgSrc="https://static.wixstatic.com/media/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg/v1/fill/w_576,h_713,al_c,lg_1,q_85,enc_auto/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg"
//       title="Book Title 1"
//       description="Description for Book 1"
//     />
//     <Book1
//       imgSrc="https://static.wixstatic.com/media/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg/v1/fill/w_576,h_713,al_c,lg_1,q_85,enc_auto/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg"
//       title="Book Title 2"
//       description="Description for Book 2"
//     />
//     <Book1
//       imgSrc="https://static.wixstatic.com/media/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg/v1/fill/w_576,h_713,al_c,lg_1,q_85,enc_auto/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg"
//       title="Book Title 3"
//       description="Description for Book 3"
//     />
//     <Book1
//       imgSrc="https://static.wixstatic.com/media/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg/v1/fill/w_576,h_713,al_c,lg_1,q_85,enc_auto/3f3c92_d78f6923d66148b19e76977209a982f9~mv2.jpg"
//       title="Book Title 4"
//       description="Description for Book 4"
//     />
//   </div>
// );



import React from 'react';
import ReactDOM from 'react-dom';




function DoublingCube({ number }) {
  return (
    <div className="doubling-cube">
      <p>{number}</p>
    </div>
  );
}


function App() {
  const randomValue1 = Math.floor(Math.random() * 6) + 1; 
  const randomValue2 = Math.floor(Math.random() * 6) + 1;

  return (
    <div className="doubling-cube-container">
      <DoublingCube number={randomValue1} />
      <DoublingCube number={randomValue2} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

