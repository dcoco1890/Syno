import React from 'react';
import API from '../utils/API';
import Stem from '../comps/Stem';
import TotalCard from '../comps/TotalCard';
import SynAntList from '../comps/SynAntList';
import ImgMW from '../comps/ImgMW';
import InForm from '../comps/InForm';

class Lookup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            data: [],
            ants: ['none found'],
            notFound: false
        }
    }

    handleClick = e => {
        e.preventDefault();

        API.getSyn(this.state.word).then(resp => {

            if (typeof (resp.data[0]) === 'string') {
                this.setState({
                    notFound: true,
                    data: []
                })
            } else {
                console.log(resp)
                console.log(resp.data[0].meta.syns)
                this.setState({
                    notFound: false,
                    data: resp.data, 
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
                <InForm page={'Synonym Finder: '} 
                        value={this.state.value}
                        handleChange={this.handleChange}
                        handleClick={this.handleClick}
                    />
                {this.state.notFound && <small className='form-text text-muted text-uppercase font-weight-bold'>Not Found</small>}
                <div className='container'>
                    {this.state.data.map(item => (
                        <TotalCard word={item.hwi.hw} part={item.fl} short={item.shortdef} key={item.meta.uuid}>
                            <Stem stems={item.meta.stems} />
                            <SynAntList syns={item.meta.syns[0]} />
                            <SynAntList ants={item.meta.ants.length ? item.meta.ants[0] : this.state.ants } />
                        </TotalCard>
                    ))}
                </div>
                <ImgMW />
            </div>
        )
    }
}

export default Lookup;