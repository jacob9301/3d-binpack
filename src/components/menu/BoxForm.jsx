function BoxForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset id='box-definition'>
                <legend>Box Dimensions:</legend>
                <label htmlFor='box-x'>X:</label>
                <input type='number' className='number-input' id='box-x' />

                <label htmlFor='box-y'>Y:</label>
                <input type='number' className='number-input' id='box-y' />

                <label htmlFor='box-z'>Z:</label>
                <input type='number' className='number-input' id='box-z' />
                <button type="submit">Add Box</button>
            </fieldset>
        </form>
    )
}

export default BoxForm;