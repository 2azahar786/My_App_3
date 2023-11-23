import React, {useState} from 'react';


// we are the selected number and setselected number props

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber}) =>{
   const arrayNumber = [1,2,3,4,5,6];


   const NumberSelectorHandler = (value) =>{
  setSelectedNumber(value)
  setError(" ")

   }
  return ( 


    <div>
        <P className ='flex justify-end text-red ml-40'> {error}</P>
        <div clasName='flex justify-end gap-4 mr-10 h-14'>
         
         {arrayNumber.map(( value, index) =>
         <div
           key = {index}
           isSelected = {value === selectedNumber}
           onClick = {() => NumberSelectorHandler(value)}
           className = {`p-4 border-black border-2 hover: bg-Slate-500 hover:text-white ${
           value === selectedNumber ? 'bg-black text-white' : ''
           }`} >
           {value}
         </div>
         )}
         <p clasName = 'mt-14 mr-4 text-bold'> Select Number </p>

        </div>
    </div>
   )
}


export default NumberSelector;