import React from 'react';

const Button = props => (
    <button  
       className='ml-2 btn btn-outline-primary'
       onClick={props.onClick}>
        Submit
    </button>
)

export default Button;