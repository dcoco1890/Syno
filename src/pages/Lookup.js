import React from 'react';
import Button from '../comps/Button';
import API from '../utils/API';
import Stem from '../comps/Stem';
import TotalCard from '../comps/TotalCard';
import SynAntList from '../comps/SynAntList';

class Lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            setWord: '',
            def: '',
            data: [],
            syns: [],
            ants: [], 
            stems: []
        }

    }
    handleClick = e => {
        e.preventDefault();

        API.getSyn(this.state.word).then(resp => {

            // if we only get an array of strings, the word is too small.
            if (typeof (resp.data[0]) === 'string') {

                // something for the user here
                console.log('Word too small, try a longer one')
            } else {
                console.log(resp)
                console.log(resp.data[0].meta.syns)
                this.setState({
                    data: resp.data,
                    syns: resp.data[0].meta.syns[0],
                    stems: resp.data[0].meta.stems,
                    def: resp.data[0].shortdef[0],
                    setWord: resp.data[0].hwi.hw,
                    ants: resp.data[0].meta.ants[0]
                })
            }
        }).catch(err => {
            console.log(err)
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
                    </form>
                    <div className='container'>
                        <TotalCard word={this.state.setWord}>
                            {this.state.stems.length ? <Stem stems={this.state.stems} /> : <div></div>}
                            {this.state.stems.length ? <SynAntList syns={this.state.syns} ants={this.state.ants} /> : <div></div>}
                        </TotalCard>
                       
                    </div>
            </div>
        )
    }




}

export default Lookup;