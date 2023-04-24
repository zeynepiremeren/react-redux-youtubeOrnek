


import axios from "axios"


const searchAction = (keyword)=> async (dispatch) =>{
    try {
       
const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q:keyword,
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '683e154806mshcc8ed03c31838e8p136db1jsndf38fbb0edda',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  await axios.request(options).then(function (response) {
      dispatch({type:'GET_SEARCH', payload:response.data})
  }).catch(function (error) {
      console.error(error);
  });

  
    } catch (error) {
        console.log(error)
    }
}

export default searchAction;