import details from './details';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  const [query, setQuery] = useState("")
  return (
        //  I see atleast three different components here, try separating 
    <div className='center'>
    <div className="App">
     <input text="type" placeholder='Search by name..' 
     value={query} // Your input should have a value attribute
     className='search' onChange={e=> { if(query.length < 1 && e.target.value.trim().length < 1) return; //the input needs a validation that prevents the user from starting the search value with a space
      setQuery(e.target.value)}} />
    <ul className='list'>
      {details.filter((details)=> details.firstName.toLowerCase().startsWith(query.toLowerCase()) || details.lastName.toLowerCase().startsWith(query.toLowerCase()) // remember that you are searching for a name, meaning the search value has to be the begiining of the name, startsWith is more effective than includes at this point
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
