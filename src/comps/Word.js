import React from 'react';

const Word = props => (
    <div className={props.syn ? 'syn' : 'ant'}>
        <h5>{props.word}</h5>
    </div>
)
export default Word;