import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function InsuranceForm() {



    const[company, setCompany]=useState('');
    const[phone, setPhone]=useState(0);
    const[policy, setPolicy]=useState('');
    const[policyValue, setPolicyValue]=useState(0);

    const handleSave = () =>{
        
    }


    return (

        <div>

            <TextField
                onChange={(event) => setCompany(event.target.value)}
                id="outlined-basic"
                label="Company"
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPhone(event.target.value)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPolicy(event.target.value)}
                id="outlined-basic"
                label="Policy Number"
                variant="outlined"
                required />
            <TextField
                onChange={(event) => setPolicyValue(event.target.value)}
                id="outlined-basic"
                label="Policy Value"
                variant="outlined"
                required />
            <Button variant="contained" color="primary"
                    onClick={handleSave} >
                    Save
                 </Button>



        </div>
    )
}

export default InsuranceForm;