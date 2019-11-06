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
        console.log(this.state.word)
        API.getSyn(this.state).then(resp => {
            console.log(resp)
        })
        
    } 

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState ({
          [name]: value,
        });
        
      };
    render(){
        return(
            <div>
                <h1>About</h1>
                <div className='card'>
                    <form>
                        <input 
                        type='text'
                        value={this.state.value}
                        name='word'
                        onChange={this.handleChange} />
                <Button onClick={this.handleClick} />
                    </form>
                </div>
            </div>
        )
    }

    

    
}

export default About;