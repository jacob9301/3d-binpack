const initialState = {
    x: 1,
    y: 1,
    z: 1,
    position: null
}

const boxReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'box/UPDATE':
            return {
                ...state,
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z
            };
        
        case 'box/SET_POSITION':
            return {
                ...state,
                position: action.payload
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