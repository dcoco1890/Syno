import React from 'react';
import ShortDef from '../comps/ShortDef';

const styles = {
    textAlign: 'left',
    display: 'inline-block'
}

const TotalCard = props => (
    <div className='card'>
        <div className='card-header' style={styles}>
            {/* word passed from setWord state*/}
            <h5>{props.word}</h5> <p className='font-italic'>({props.part})</p> <ShortDef def={props.short} />
        </div>
        <div className='card-body'>
            <div className='card-text'> 
                <div className='row'>
                    {props.children}
                </div>
            </div>
        </div>
    </div>
)

export default TotalCard;