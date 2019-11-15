import React from 'react';
import InForm from '../comps/InForm';
import API from '../utils/API';
import ImgMW from '../comps/ImgMW';



class Translation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            data: [],
            notFound: false
        }
    }

    handleClick = e => {
        //click stuff for translations
        e.preventDefault();
    }

    // input stuff
    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    };

    render() {

        return(
        <div>
            <InForm page={'Translation: '}
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
            <ImgMW />
        </div>)
    }

}

export default Translation;