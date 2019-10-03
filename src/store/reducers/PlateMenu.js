const menu = [
    {
        item: `Organism Plate`,
        isActive: true 
    },
    {
        item: `Antibiotic Plate`, 
    },
    {
        item: `ISO Comment`, 
    },
    {
        item: `General Comment`, 
    },
    {
        item: `Antibiotic Dictionary`, 
    },
    {
        item: `Parasitology Dictionary`, 
    },
    {
        item: `Organism Dictionary`, 
    },
    {
        item: `TNP`, 
    },
    {
        item: `Tick Dictionary`, 
    },
    {
        item: `Others Dictionary`, 
    },
    {
        item: `Test Dictionary`, 
    },
    {
        item: `Users`, 
    }, 
];



export const plateMenu = (state = menu, action) => {
    let newState;
    switch (action.type) {
        case `SET_ACTIVE_PLATE`:
            newState = JSON.parse(JSON.stringify(state));
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].isActive) newState[i].isActive = false; 
            }
            newState[action.index].isActive = true;
            return newState;

        default: return state;
    }
}