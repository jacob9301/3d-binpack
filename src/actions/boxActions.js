export const setBoxPosition = () => ({
    type: 'box/SET_POSITION'
});

export const resetBox = () => ({
    type: 'box/RESET'
});

export const updateBox = (xDim, yDim, zDim) => ({
    type: 'box/UPDATE',
    payload: {x: xDim, y: yDim, z: zDim}
});