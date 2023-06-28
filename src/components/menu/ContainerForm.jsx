function ContainerForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset id='container-definition'>
                <legend>Container Dimensions:</legend>
                <label htmlFor='container-x'>X:</label>
                <input type='number' className='number-input' id='container-x' />

                <label htmlFor='container-y'>Y:</label>
                <input type='number' className='number-input' id='container-y' />

                <label htmlFor='container-z'>Z:</label>
                <input type='number' className='number-input' id='container-z' />
                <button type="submit">Set Size</button>
            </fieldset>
        </form>
    )
}

export default ContainerForm;