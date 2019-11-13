import React from 'react';

const Stem = props => (
    <ul className="list-group">
    {props.stems.map(item => (
      <li className="list-group-item" key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default Stem;

