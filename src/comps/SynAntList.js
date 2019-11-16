import React from 'react';
import Word from '../comps/Word';

const SynAntList = props => (

        <div className='col-md-4'>
            {props.syns ? <p>Synonyms</p> : <p>Antonyms</p>}
            {props.syns ? props.syns.map(item => (
                <Word syn={true} word={item} key={item} />
            )) : props.ants.map(item => (
                <Word word={item} key={item} />
            ))}
        </div>

)

export default SynAntList;