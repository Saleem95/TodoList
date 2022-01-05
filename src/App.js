import './App.css';
import React from 'react';
import {useState} from 'react'
// import Form from './Components/Form';
import List from './Components/List';

function App() {

     const [inputlist ,setinputlist] = useState('');
    const[Items, setItems] = useState([])
    const itemChange = e =>{
      setinputlist(e.target.value);
    }
    const itemSubmit = e =>{
      setItems((data) =>{
        return [...data,inputlist]
      });
      setinputlist("");
    }

    const deleteitem = (id)=>{
      console.log("deleted")
      setItems((old) =>{
        return old.filter((arr,index)=>{
            return index !== id;
        })

      })
  }
    return ( 
      
     <div className='main'>
       <h2>Add Deatils</h2>
        <input onChange={itemChange} type="text" name="input" id="" value={inputlist}/> <br/><br/>

        <button onClick={itemSubmit} > Add</button>
      
      <ol>
        {Items.map((itemvalue ,index) =>{
        return <List key={index} id={index} text={itemvalue}
             onSelect ={deleteitem}
        />

        })}
      </ol>
     </div>
      
     );

}

export default App;
