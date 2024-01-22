
// Each description is an array whose second element is an "instantaneous duration" flag.
// If true, it will trigger duration to be "instantaneous."
// The third element is an Area Effect flag - if true, it will override target to "area effect".
const descriptionsArray = [
    [
        "A noxious fart cloud emanates from a point and hangs in the air, forcing anyone inside to make a DC 15 CON save or spend their turn vomiting.",
        false,
        true
    ],

    [
        "The target grows bat wings that sprout from their back and grant them flying speed 20'.",
        false,
        false
    ],
    
    [
        "The target shrinks to a size Small creature and stands only 6 inches tall.  For the duration of the spell, they have Armor Class 19, move 5', and STR 3.",
        false,
        false
    ],

    [
        "The target grows to a size Large creature and stands 20' tall.  For the duration of the spell, they have a 25 STR and a move of 50'.",
        false,
        false
    ],
    
    [
        "Randomize 2 more times and take both effects.",
        true,
        false
    ],
    
    [
        "The target is held for the duration of the spell unless they can make a Wisdom save, at the caster's DC.",
        false,
        false
    ],

    [
        "The target is yeeted directly away from where the caster is facing, 30' into the air and 60' away, and must take 3D10 force damage.  If this causes the target to impact any objects they take an additional D10 for each, plus any fall damage.",
        true,
        false
    ],

    [
        "The caster summons 1D4 random CR1 monsters (HP 14 AC 13) that are loyal to them for the duration of the spell.",
        false,
        true
    ],
    
    [
        "The target is surrounded by glowing red symbols and becomes weak to all forms of damage for the duration of the spell.",
        false,
        false
    ],
    
    [
        "The caster receives a holy hand grenade from above in a radiant sunbeam.  It is treated as a thrown simple weapon with range 30/60, and does 2D8+6 radiant damage in a 15' sphere.",
        true,
        false
    ],
    
    [
        "The target must succeed a Wisdom save DC caster's spellcasting ability, or be put to sleep for the duration of the spell.",
        false,
        false
    ],
    
    [
        "Targets in the area must succeed a Wisdom save DC caster's spellcasting ability, or be put to sleep for the duration of the spell.",
        false,
        true
    ],
    
    [
        "The target gains resistance to all physical attacks (bludgeoning/piercing/slashing) for the duration.",
        false,
        false
    ],
    
    [
        "Fireball at level 3 power - centered around a visible enemy of the caster's choosing",
        true,
        true
    ],
    
    // TODO: Make the true/false flags into String overrides that will render in the component
    [
        "A single target other than the caster is sucked into the caster's mouth Kirby-style.  The caster can choose to keep the creature held in their mouth for up to 4 turns, during each of which the held creature takes 1D10 damage.  They must then be spit out 10' away from the caster.",
        false,
        false
    ],


];

// Set the target value
const randomTarget = (areaOverride) => {

    // If the areaOverride arg is true, set target to "Area" and assign a random size
    let target = "";

    if (areaOverride === true) {
        let area = "Area: ";

        // Randomly assign the size of the area spell
        const areaSizes = ["20' x 20' cube at point chosen by caster",
            "10' x 10' cube centered around caster",
            "30' cone emanating from caster",
            "40' sphere centered around caster",
            "40' sphere at point chosen by caster"
        ];

        const randomArea = Math.floor(Math.random() * areaSizes.length);

        let size = areaSizes[randomArea];

        target = area+size;

    }
    else {
        const targets = ["Self", "Single Friendly", "Multiple Friendlies", "Single Enemy", "Multiple Enemies"];
        const randomIndex = Math.floor(Math.random() * targets.length);
        target = targets[randomIndex];
    };

    return target;
}

// Set the duration and range values
const spellDuration = (durationOverride) => {

    // If durationOverride arg is True, set duration to instantaneous.
    let durationFinal = "";

    if (durationOverride === true) {
        durationFinal = "Instantaneous";
    }
    else {

        const durations = ["1", "2", "4", "6", "8", "10", "12", "20", "1 minute", "permanent"]
        const randomIndex = Math.floor(Math.random() * durations.length);

        // display value based on text
        let chosenDuration = durations[randomIndex];

        if (chosenDuration === "1") {
            durationFinal = "1 turn";
        }
        else if (chosenDuration === "2") {
            durationFinal = "2 turns";
        }
        else if (chosenDuration === "4") {
            durationFinal = "1d4 turns";
        }
        else if (chosenDuration === "6") {
            durationFinal = "1d6 turns";
        }
        else if (chosenDuration === "8") {
            durationFinal = "1d8 turns";
        }
        else if (chosenDuration === "10") {
            durationFinal = "1d10 turns";
        }
        else if (chosenDuration === "12") {
            durationFinal = "1d12 turns";
        }
        else if (chosenDuration === "20") {
            durationFinal = "1d20 turns";
        }
        else {
            durationFinal = durations[randomIndex];
        }
    };

    return durationFinal;
}


const generateSpellData = () => {

    // Define return parameters
    let description = "";
    let target = "";
    let duration = "";

    const randomIndex = Math.floor(Math.random() * descriptionsArray.length);
    let desc = descriptionsArray[randomIndex];

    // Set the description parameter to the value at desc[0]
    description = desc[0];

    // Check to see if duration should be handled instantaneously.
    if (desc[1] === true) {
        // Set the duration to "instantaneous"
        duration = spellDuration(true);
    }
    else {
        duration = spellDuration(false);
    }

    // Handle case where the area flag is true
    if (desc[2] === true) {
        // Set the target to random sized area
        target = randomTarget(true);
    }
    else {
        target = randomTarget(false);
    }

    return {
        "target": target,
        "duration": duration,
        "description": description
    };

}

export {generateSpellData};