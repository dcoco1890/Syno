import React from 'react';
import InForm from '../comps/InForm';
// import API from '../utils/API';
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
        this.setState({
            notFound: true
        })
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
                {this.state.notFound && <small className='form-text text-muted text-uppercase font-weight-bold'>Work in progress, Check back soon!</small>}
            <ImgMW />
        </div>)
    }

}

export default Translation;