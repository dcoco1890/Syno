import React from 'react';
import Button from '../comps/Button';
import API from '../utils/API';

class About extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            word: ''
        }
        
    }
    handleClick = e => {
        e.preventDefault ();
    } 

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState ({
          [name]: value,
        });
        console.log (this.state);
      };
    render(){
        return(
            <div>
                <h1>About</h1>
                <div className='card'>
                    <form>
                        <input type='text' />
                <Button />
                    </form>
                </div>
            </div>
        )
    }

    

    
}

export default About;