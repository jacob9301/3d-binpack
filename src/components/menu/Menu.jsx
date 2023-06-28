import { useState } from 'react'
import ContainerForm from './ContainerForm';
import BoxForm from './BoxForm';

function Menu() {

    const [showing, setShowing] = useState(true);

    return (
        <>
            <div id="menu" className={showing ? 'show' : 'hide'}>
                <ContainerForm />
                <BoxForm />
                <button id='toggle-button' onClick={() => {setShowing(!showing)}} >{showing ? '<' : '>'}</button>
            </div>
        </>
    )
}

export default Menu