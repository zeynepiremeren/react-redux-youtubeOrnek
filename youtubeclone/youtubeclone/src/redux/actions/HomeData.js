
import axios from "axios"


const homeAction = (data)=> async (dispatch) =>{
    try {
        
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/search',
            params: {
              relatedToVideoId: '7ghhRHRP6t4',
              part: 'id,snippet',
              q:data,
              type: 'video',
              maxResults: '50'
            },
            headers: {
              'X-RapidAPI-Key': '683e154806mshcc8ed03c31838e8p136db1jsndf38fbb0edda',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
  await axios.request(options).then(function (response) {
      dispatch({type:'GET_VIDEOS', payload:response.data})
  }).catch(function (error) {
      console.error(error);
  });

  
    } catch (error) {
        console.log(error)
    }
}

export default homeAction;