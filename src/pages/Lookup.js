import React from 'react';
import Button from '../comps/Button';
import API from '../utils/API';
import Word from '../comps/Word';
import Stem from '../comps/Stem';

class Lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            lookup: false,
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
                    lookup: true,
                    data: resp.data,
                    syns: resp.data[0].meta.syns[0],
                    stems: resp.data[0].meta.stems
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
        const theSyns = this.state.syns.map(item => {
            return <Word syn={true} word={item} key={item} />
        });
        const theStems = this.state.stems.map(item => {
            return <li>{item}</li>
        })

        return (
            <div>
                <div className='card'>
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
                    <div className='container-fluid'>
                        <div className='d-flex flex-column'>
                            {this.state.stems ? <Stem word={this.state.word}>{theStems}</Stem> : <div></div>}
                            {theSyns}
                        </div>
                    </div>
                </div>
            </div>
        )
    }




}

export default Lookup;