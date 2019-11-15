import React from 'react';
import Button from '../comps/Button';
import API from '../utils/API';
import Stem from '../comps/Stem';
import TotalCard from '../comps/TotalCard';
import SynAntList from '../comps/SynAntList';
import logo from '../img/mwlogo.jpg'

class Lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            def: '',
            data: [],
            ants: ['none found'],
            notFound: false
        }
    }

    handleClick = e => {
        e.preventDefault();

        API.getSyn(this.state.word).then(resp => {

            // if we only get an array of strings, the word is too small.
            if (typeof (resp.data[0]) === 'string') {

                // something for the user here
                console.log('Word too small, try a longer one');
                this.setState({
                    notFound: true
                })
            } else {
                console.log(resp)
                console.log(resp.data[0].meta.syns)
                this.setState({
                    notFound: false,
                    data: resp.data,
                    syns: resp.data[0].meta.syns[0],
                    stems: resp.data[0].meta.stems,
                    def: resp.data[0].shortdef[0],
                    
                })
            }
        }).catch(err => {
            console.log(err);
            this.setState({
                notFound: true
            })
        })
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });

    };

    render() {
      
        return (
            <div>
                <form>
                    <label className='d-flex align-items-center justify-content-center'>
                    <h1 className='pr-2'>Synonym Finder: </h1>
                        <input
                            type='text'
                            value={this.state.value}
                            name='word'
                            onChange={this.handleChange} />
                        <Button onClick={this.handleClick} />
                    </label>
                            {this.state.notFound && <small className='form-text text-muted text-uppercase font-weight-bold'>Not Found</small>}
                    <div className='img-spot'>
                        <p>Powered By:</p>
                    <img src={logo} alt='merriam-webster-logo'/>
                    </div>
                </form>
                    <div className='container'>
                        {this.state.data.map(item => (
                            <TotalCard word={item.hwi.hw} >
                                <Stem stems={item.meta.stems} />
                                <SynAntList syns={item.meta.syns[0]} ants={item.meta.ants.length ? item.meta.ants[0] : this.state.ants } />
                            </TotalCard>
                        ))}
                       
                    </div>
            </div>
        )
    }
}

export default Lookup;