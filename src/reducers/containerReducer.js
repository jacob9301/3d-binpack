const initialState = {
    dimensions: {x: 20, y: 20, z: 20},
    hasUpdate: false
}

const containerReducer = (state = initialState, action) => {

    switch(action.type) {

        case 'container/UPDATE_HANDLED':
            return {
                hasUpdate: false
            };
        
        case 'container/UPDATE':
            return {
                dimensions: {
                    x: action.payload.x, 
                    y: action.payload.y, 
                    z: action.payload.z
                },
                hasUpdate: true,
            };

        case 'container/RESET':
            return {
                ...initialState
            }
        
        default:
            return state;

    }

}

export default containerReducer;