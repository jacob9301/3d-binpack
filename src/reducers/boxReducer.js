const initialState = {
    x: 0,
    y: 0,
    z: 0,
    position: null
}

const boxReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'UPDATE':
            return {
                ...state,
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z
            };
        
        case 'SET_POSITION':
            return {
                ...state,
                position: action.payload
            };
        
        case 'RESET':
            return {
                ...initialState
            };

        default:
            return state;

    }

}

export default boxReducer;