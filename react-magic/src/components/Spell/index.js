import {React, useState} from "react";
import "../../styles/tailwind.css";
import {generateSpellData} from "../../spells"


const Spell = () => {

    const [spellData, setSpellData] = useState(null);

    const handleButtonClick = () => {
        // Call the generateSpellData function
        const newSpellData = generateSpellData();

        // Set the state based on the object return
        setSpellData(newSpellData);
    };

    return (
        <div className="flex flex-col items-center justify-evenly w-full min-h-screen">
      <h2 className="text-2xl font-bold w-full bg-emerald-400 py-3">Random Spell</h2>
      {spellData && (
        <div className="bg-stone-100 border-2 p-4 my-12 rounded text-center w-3/4 shadow-md h-1/2">
          <strong>Spell Info:</strong>
          <div className="mt-2">
            <strong>Target:</strong> {spellData.target}
          </div>
          <div className="my-4">
            <strong>Duration:</strong> {spellData.duration}
          </div>
          <div>
            <strong>Description:</strong> {spellData.description}
          </div>
        </div>
      )}
      <button
        className="border-amber-800 rounded-md shadow shadow-lg text-lg font-bold bg-amber-500 p-3"
        onClick={handleButtonClick}
      >
        Randomize
      </button>
    </div>
    );
};


export default Spell;