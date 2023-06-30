export const setBoxPosition = (position) => ({
    type: 'box/SET_POSITION',
    payload: position
});

export const updateBox = (xDim, yDim, zDim) => ({
    type: 'box/UPDATE',
    payload: {x: xDim, y: yDim, z: zDim}
});