import { TextField,Button } from '@material-ui/core';
import React, { useState } from 'react';

function GetTransactions( {contract}) {

    const [address,setAddress] = useState('')

    const handleClick = () => {
        // console.log(address);
        contract(address);
    }   

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>   
        <TextField id="outlined-basic" label="Enter Contract Address" variant="outlined"  style={{margin:'5px',padding:'5px'}} 
            value={address} 
            onChange = { (add) => setAddress(add.target.value) }
        />
        <Button variant="contained" style={{color:'white',background:'black',margin:'15px',padding:'5px'}} 
            onClick={handleClick}>
            Get Transactions
        </Button>
    </div>
  )
  
}

export default GetTransactions