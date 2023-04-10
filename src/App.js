import details from './details';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [query, setQuery] = useState("")
  return (
    <div className='center'>
    <div className="App">
     <input text="type" placeholder='Search by name..' 
     className='search' onChange={e=> setQuery(e.target.value)}></input>
    <ul className='list'>
      {details.filter((details)=> details.firstName.toLocaleLowerCase().includes(query)
      ).map((details)=>(
      <li key={details.id} className='listItems'>
        <div className='image'>
        <img src={details.picture} alt=""></img>
        </div>
        <div className='house'>
        <div className='id'>
          {details.id}
         </div>
        <div className='items'>
          {details.title} {details.firstName} {details.lastName}
        </div>
        </div>
        
    </li>
        ))}
     </ul>
    
    </div>
    </div>
  );
}



export default App;
