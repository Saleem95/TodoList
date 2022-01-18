
import React from 'react'


function List(props) {    
    return (      
           <>
           <div id='d1'> 
           <table>
               
               <tr>
                 <td>{props.text}</td>    
               </tr>
           </table>
           <i  onClick={()=>{props.onSelect(props.id)}} aria-hidden="true" className="far fa-trash-alt" > </i>    

            
           </div>
           </> 
    )
}

export default List
