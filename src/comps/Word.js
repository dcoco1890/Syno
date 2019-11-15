import React from 'react';

const Word = props => (
    <div className={props.syn ? 'syn' : 'ant'}>
        <h4>{props.word}</h4>
    </div>
)
export default Word;