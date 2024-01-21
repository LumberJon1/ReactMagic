import {React, useState} from "react";

const Spell = () => {
  
    // Change this to a separate js file called spellsArray
    const spellsArray = ["Stuff"]

    const [spellData, setSpellData] = useState(null);

    const handleButtonClick = () => {
        // Pull value from array at random index
        const randomIndex = Math.floor(Math.random() * spellsArray.length)
        const selectedValue = spellsArray[randomIndex]

        // Set the value to the random index of spellsArray
        setSpellData(selectedValue)
    };

    return (
        <div>
          <h2>Random Spell</h2>
          <button onClick={handleButtonClick}>Randomize</button>
          {spellData && 
            <div>Spell Info: {spellData}
                
            </div>}
        </div>
    );
};


export default Spell;