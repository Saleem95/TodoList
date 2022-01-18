import './App.css';
import React from 'react';
import {useState} from 'react'
// import Form from './Components/Form';
import List from './Components/List';

function App() {
    const [code ,setcode] = useState('');
    const [name ,setname] = useState('');
    const [address ,setaddress] = useState('');
    const [city ,setcity] = useState('');
    const [pincode ,setpincode] = useState('');
    const [statecode ,setstatecode] = useState('');
    const [gst ,setgst] = useState('');
    const [contactname ,setcontactname] = useState('');
    const [conatctnumber ,setconatctnumber] = useState('');
    const [mobilenumber ,setmobilenumber] = useState('');
    const [email ,setemail] = useState('');
    const [comapnycode ,setcomapnycode] = useState('');
    const[Items, setItems] = useState([])

    
    const itemSubmit = e =>{
      setItems((data) =>{
        return [...data,code,name,address,city,pincode,statecode,gst,contactname,conatctnumber,mobilenumber,email,comapnycode]
      });
      // setinputlist("");
      setcode("");
      setname("");
      setaddress();
      setcity("");
      setpincode("");
      setstatecode("");
      setgst("");
      setconatctnumber("")
      setcontactname("");
      setmobilenumber("");
      setemail("");
      setcomapnycode("")
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
      <>
      <h1>Add</h1>
     <div className='main'>
        <div className='inmain'>
        <div>
        <input onChange={e=>{setcode(e.target.value)}} type="text" name="code" id="" placeholder='Code' value={code}/> <br/><br/>
        <input onChange={e=>{setname(e.target.value)}} type="text" name="name" id=""placeholder='Name' value={name}/> <br/><br/>
        <input onChange={e=>{setaddress(e.target.value)}} type="text" name="address"placeholder='Address' id="" value={address}/> <br/><br/>
        <input onChange={e=>{setcity(e.target.value)}} type="text" name="city" id=""placeholder='City' value={city}/> <br/><br/>
        <input onChange={e=>{setpincode(e.target.value)}} type="number" name="pincode"placeholder='Pincode' id="" value={pincode}/> <br/><br/>
        <input onChange={e=>{setstatecode(e.target.value)}} type="number" name="statecode"placeholder='Statecode' id="" value={statecode}/> <br/><br/> 
        </div>
        <div>
        <input onChange={e=>{setgst(e.target.value)}} type="text" name="gst" id=""placeholder='Gst' value={gst}/> <br/><br/>
        <input onChange={e=>{setcontactname(e.target.value)}} type="text" name="contactName" id=""placeholder='Contactname' value={contactname}/> <br/><br/>
        <input onChange={e=>{setconatctnumber(e.target.value)}} type="number" name="conatctnumber"placeholder='Conatctnumber' id="" value={conatctnumber}/> <br/><br/>
        <input onChange={e=>{setmobilenumber(e.target.value)}} type="number" name="mobilenumber" id=""placeholder='Mobilenumber' value={mobilenumber}/> <br/><br/>
        <input onChange={e=>{setemail(e.target.value)}} type="email" name="email" id=""placeholder='Email' value={email}/> <br/><br/>
        <input onChange={e=>{setcomapnycode(e.target.value)}} type="text" name="CompanyCode" id=""placeholder='Comapnycode' value={comapnycode}/> <br/><br/> 
        </div> 
        </div>
        <button onClick={itemSubmit} > Add</button>
      
      <ol>
        {Items.map((itemvalue ,index) =>{
        return <List key={index} id={index} text={itemvalue} onSelect ={deleteitem}/>

        })}
      </ol>
     </div>
     </>
     );

}

export default App;
