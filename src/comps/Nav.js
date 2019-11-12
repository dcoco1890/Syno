import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    const styles = {
        ul: {
            display: 'flex',
            justifyContent: 'space-around',
            listStyle: 'none',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.6)',
            marginBottom: '2.5rem',
            padding: '.5rem 0'
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



