import React from 'react';
import Word from '../comps/Word';

const SynAntList = props => (
    <div className='row'>
        <div className='col-md-6'>
            {props.syns.map(item => (
                <Word syn={true} word={item} key={item} />
            ))}
        </div>
        <div className='col-md-6'>
            {props.ants.map(item => (
                <Word word={item} key={item} />
            ))}
        </div>
    </div>
)

export default SynAntList;