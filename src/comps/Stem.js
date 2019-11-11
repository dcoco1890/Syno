import React from 'react';

const Stem = props => (
    <div className='card'>
        <div className='card-header'>
            <h1>{props.word}</h1>
        </div>
        <div className='card-body'>
            <div className='card-text'>
                Also:
                <ul>
                    {props.children}
                </ul>
            </div>
        </div>
    </div>
);

export default Stem;

