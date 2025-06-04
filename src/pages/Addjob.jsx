
import React from 'react'
import FormRow from '../components/FormRow.jsx';


export default function Addjob() {
  return (
    <div >
        
         <FormRow type='email' name='email' defaultValue='john@gmail.com' />
         <FormRow type='password' name='password' defaultValue='secret123' />

      
    </div>
  )
}
