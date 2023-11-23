import React, {useState} from 'react';

const RoleDice = ({roleDice, currentDice}) =>{
   

 return(

    <div>
        <div>
        <img
        src={`./Assets/Dice_${currentDice}.png`}
        alt={`dice-${curentDice}`}
        className ='w-40 h-40 mt-20 cursor-pointer'
        />
        </div>
        <div className='flex justify-center'>     
          <p className ='mt-3 font-bold text-blue' >Click on Dice Role</p>
        </div>
    </div>
 )

};


export default RoleDice;