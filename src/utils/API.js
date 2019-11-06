import axios from 'axios';

export default {
    getSyn: function(word){
        console.log(process.env.REACT_APP_THESAURUS)
        return axios.get(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.REACT_APP_THESAURUS}`)
    }
};