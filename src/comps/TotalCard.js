import React from 'react';
const styles = {
    textAlign: 'left',
    display: 'inline-block'
}

const TotalCard = props => (
    <div className='card'>
        <div className='card-header' style={styles}>
            {/* word passed from setWord state*/}
            <h5>{props.word}</h5> <p className='font-italic'>({props.part})</p>
        </div>
        <div className='card-body'>
            <div className='card-text'> 
            {props.children}
            </div>
        </div>
    </div>
)

export default TotalCard;