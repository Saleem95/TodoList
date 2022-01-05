import React from 'react'


function List(props) {    
    return (      
           <>
           <div id='d1'> 
            <i  onClick={()=>{props.onSelect(props.id)}} aria-hidden="true" className="far fa-trash-alt" > </i>    
               <li>{props.text}</li>
           </div>
           </> 
    )
}

export default List
