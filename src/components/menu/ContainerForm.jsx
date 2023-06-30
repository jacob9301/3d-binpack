import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateContainer } from '../../actions/containerActions';

function ContainerForm() {

    const dispatch = useDispatch();

    const [xDim, setXDim] = useState(20);
    const [yDim, setYDim] = useState(20);
    const [zDim, setZDim] = useState(20);

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(updateContainer(xDim, yDim, zDim));
    };

    const handleXChange = (event) => {
        const x = Number(event.target.value);

        if (x > 0) {
            setXDim(x);
        }
    }

    const handleYChange = (event) => {
        const y = Number(event.target.value);

        if (y > 0) {
            setYDim(y);
        }
    }

    const handleZChange = (event) => {
        const z = Number(event.target.value);

        if (z > 0) {
            setZDim(z);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset id='container-definition'>
                <legend>Container Dimensions:</legend>
                <label htmlFor='container-x'>X:</label>
                <input type='number' className='number-input' id='container-x'
                    onChange={handleXChange} value={xDim} />

                <label htmlFor='container-y'>Y:</label>
                <input type='number' className='number-input' id='container-y' 
                    onChange={handleYChange} value={yDim} />

                <label htmlFor='container-z'>Z:</label>
                <input type='number' className='number-input' id='container-z' 
                    onChange={handleZChange} value={zDim} />
                <button type="submit">Set Size</button>
            </fieldset>
        </form>
    )
}

export default ContainerForm;