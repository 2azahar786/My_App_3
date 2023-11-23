import React, {useState} from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import Rules from './Rules';


const PlayGame = () =>{
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [Score,  setScore] = useState(0);
  const [error, setError] =  useState("  ");
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) =>{
    return Math.floor(math.random() * (max -min) + min);
  };
 

  const roleDice = () =>{
    if(!SelectedNimber){
        setError("You have not been selected any number");
        return;
    }


    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);


    if(selectedNumber === randomNumber){
        setScore( (prev) => prev + randomNumber)
    } else{
        setScore( (prev) => prev - 2);
    }

    setSelectedNumber (undefined);
  };

  const resetScore = () =>{
    setScore(0);
  }


  return(
     <div>
      <TotalScore Score={Score} />
      <NumberSelector
       error={error}
       setError={setError}
       selectedNumber ={selectedNumber}
       setSelectedNumber = {setSelectedNumber}
      />
      <RoleDice currentDice={currentdice} roleDice ={roleDice} />
      <div>
        <button onClick ={resetScore} className=' bg-white text-black pl-6 pr-6 pt-2 pb-2 rounded-sm border border-black hover:bg-black hover:text-white'>Reset</button>
        <button
          onClick={ () =>setShowRules((prev) =>!prev)}
          className='bg-black text-white pl-4 pr-4 pt-2 pb-2 rounded-sm hover:bg-gray-500'> {ShowRules ? "Hide" : "Show"}Rules</button>
      </div>
      {showRules && <Rules/>}
     </div>
  )

}


export default PlayGame;