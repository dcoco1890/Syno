import React from 'react';

const Word = props => (
    <div className={props.syn ? 'syn' : 'ant'}>
        <h2>{props.word}</h2>
    </div>
)
export default Word;