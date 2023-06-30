export const updateContainer = (xDim, yDim, zDim) => ({
    type: 'UPDATE',
    payload: {x: xDim, y: yDim, z: zDim}
});

export const containerUpdateHandled = () => ({
    type: 'UPDATE_HANDLED'
})