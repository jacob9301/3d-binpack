const initialState = {
    dimensions: {x: 1, y: 1, z: 1},
    position: false,
    added: false
}

const boxReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'box/UPDATE':
            return {
                ...state,
                dimensions: {
                    x: action.payload.x, 
                    y: action.payload.y, 
                    z: action.payload.z
                },
                added: true
            };
        
        case 'box/SET_POSITION':
            return {
                ...state,
                position: true
            };

        case 'box/ADDED':
            return {
                ...state,
                added: true
            };
            
        
        case 'box/RESET':
            return {
                ...initialState
            };

        default:
            return state;

    }

}

export default boxReducer;