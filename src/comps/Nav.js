import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav(){
    const styles = {
        ul: {
            display: 'flex',
            listStyle: 'none',
            boxShadow: '1px 1px 5px rgba(0,0,0,0.6)',
            marginBottom: '2.5rem',
            padding: 0,
            background: 'linear-gradient(10deg, rgba(253,29,146,1) 0%, rgba(252,139,69,1) 100%)'
        },
        li: {
            fontSize: '1.1rem',
            padding: '.9rem 1rem',
        }
    }
    return(
        <div>
        <nav>
            <ul style={styles.ul}>
                <Link to='/'><li style={styles.li}>Home</li></Link>
                <Link to='/lookup'><li style={styles.li}>Lookup</li></Link>
                <Link to='/translate'><li style={styles.li}>Translator</li></Link>
            </ul>
        </nav>

        </div>
    )
}



