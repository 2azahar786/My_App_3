import React from 'react';

const Rules = () =>{

    return(
        <div className='bg-blue-200 w-90 ml-60'>
            <div className = 'flex justify-center ml-6'>
                <h className='font-bold'>How to Play Dice Game</h>
            </div>
            <div className ='flex justify-center justify-col'>
                <p className ='text-center'>1. Select any number</p>
                <p className ='text-center'>2. Click on the dic image</p>
                <p className ='text-center'>3. after click on dice if selected number is equal to dice number <br></br>you will get same points as dice if you get wrong guess then 2 points will be deducted.</p>
            </div>
        </div>
    )
}


export default Rules;