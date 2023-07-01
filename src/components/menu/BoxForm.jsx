import { useState } from 'react';
import { updateBox } from '../../actions/boxActions';
import { useDispatch, useSelector } from 'react-redux';

function BoxForm() {

    const boxPositionSet = useSelector(state => state.box.position);
    const dispatch = useDispatch();

    const [xDim, setXDim] = useState(1);
    const [yDim, setYDim] = useState(1);
    const [zDim, setZDim] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (boxPositionSet) {
            dispatch(updateBox(xDim, yDim, zDim));
        } else {
            window.alert('select position to add box');
        }
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
            <fieldset id='box-definition'>
                <legend>Box Dimensions:</legend>
                <label htmlFor='box-x'>X:</label>
                <input type='number' className='number-input' id='box-x'
                    onChange={handleXChange} value={xDim} />

                <label htmlFor='box-y'>Y:</label>
                <input type='number' className='number-input' id='box-y' 
                    onChange={handleYChange} value={yDim} />

                <label htmlFor='box-z'>Z:</label>
                <input type='number' className='number-input' id='box-z' 
                    onChange={handleZChange} value={zDim} />
                <button type="submit">Add Box</button>
            </fieldset>
        </form>
    )
}

export default BoxForm;