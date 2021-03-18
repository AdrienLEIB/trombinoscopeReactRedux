import axios from 'axios';

export const GET_TROMBINOSCOPE = 'GET_TROMBINOSCOPE';

export const get_trombinoscope = trombinoscope => ({
    type: GET_TROMBINOSCOPE,
    payload: trombinoscope
});

export const getTrombinoscope = () =>  dispatch => {
   axios({
       method: 'get',
       url: 'http://hp-api.herokuapp.com/api/characters'
   })
   .then(res => {
    //    console.log(res)
       dispatch(get_trombinoscope(res.data));
   })
   .catch(err => err);
}