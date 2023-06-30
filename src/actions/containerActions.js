export const updateContainer = (xDim, yDim, zDim) => ({
    type: 'container/UPDATE',
    payload: {x: xDim, y: yDim, z: zDim}
});

export const containerUpdateHandled = () => ({
    type: 'container/UPDATE_HANDLED'
})