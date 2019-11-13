import React from 'react';

const TotalCard = props => (
    <div className='card'>
        <div className='card-header'>
            {/* word passed from setWord state*/}
            <h1>{props.word}</h1>
        </div>
        <div className='card-body'>
            <div className='card-text'> 
            {props.children}
            </div>
        </div>
    </div>
)

export default TotalCard;