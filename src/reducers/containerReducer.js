const initialState = {
    x: 0,
    y: 0,
    z: 0,
    hasUpdate: false
}

const containerReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'INITIALISE':
            return {
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z,
                hasUpdate: false
            };
        
        case 'UPDATE':
            return {
                x: action.payload.x,
                y: action.payload.y,
                z: action.payload.z,
                hasUpdate: true,
            };

        case 'RESET':
            return {
                ...initialState
            }
        
        default:
            return state;

    }

}

export default containerReducer;