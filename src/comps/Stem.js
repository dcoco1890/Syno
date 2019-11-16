import React from 'react';

const Stem = props => (
  <div className='col-md-4'>
    <p>Similar</p>
    <ul className="list-group">
    {props.stems.map(item => (
      <li className="list-group-item" key={item}>
        {item}
      </li>
    ))}
   </ul>
  </div>
);

export default Stem;

