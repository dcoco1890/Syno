import React from 'react';
import Button from '../comps/Button';
import API from '../utils/API';
import Word from '../comps/Word';

class Lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            lookup: false,
            data: [],
            syns: [],
            ants: []
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
                    syns: resp.data[0].meta.syns[0]
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

        return (
            <div>
                <h1>Synonym Finder</h1>
                <div className='card'>
                    <form>
                        <input
                            type='text'
                            value={this.state.value}
                            name='word'
                            onChange={this.handleChange} />
                        <Button onClick={this.handleClick} />
                    </form>
                    <div className='container-fluid'>
                        <div className='d-flex flex-column'>
                            {theSyns}
                        </div>
                    </div>
                </div>
            </div>
        )
    }




}

export default Lookup;