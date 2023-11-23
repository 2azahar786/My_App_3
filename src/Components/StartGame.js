import React from 'react';

const StartGame = ({toggle}) =>{



    return(
        <div>
            <div>
            <img src='../Assets/dices 1.png' alt='main-img' className ='w-96 h-96 mt-10 ml-10'/>
            </div>
            <div>
                <h1 className ='text-8xl mt-15 mr-20 font-bold'> DICE GAME</h1>
                <button onClick ={toggle} className ='bg-black text-white mt-5 ml-10 pt-5 pb-5 pl-2 pr-2 rounded-md'>Play Now</button>
            </div>
        </div>
    )
}



export default StartGame;