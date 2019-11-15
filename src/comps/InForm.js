import React from 'react';
import Button from '../comps/Button';

const InForm = props => (
    <form>
    <label className='d-flex align-items-center justify-content-center mb-3'>
    <h1 className='pr-2'>{props.page}</h1>
        <input
            type='text'
            value={props.value}
            name='word'
            onChange={props.handleChange} />
        <Button onClick={props.handleClick} />
    </label>
    </form>
)

export default InForm;