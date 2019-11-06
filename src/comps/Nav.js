import React from 'react';

import {Link} from 'react-router-dom';
// import About from '../comps/About';

export default function Nav(){
    const styles = {
        ul: {
            display: 'flex',
            justifyContent: 'space-around'
        }
    }
    return(
        <div>
        <nav>
            <ul style={styles.ul}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/lookup'>Lookup</Link></li>
            </ul>
        </nav>

        </div>
    )
}



