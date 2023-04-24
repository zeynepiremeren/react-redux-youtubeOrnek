import axios from "axios"


const detailAction = (id)=> async (dispatch) =>{
    try {
        
        
        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/videos',
            params: {part: 'contentDetails,snippet,statistics', id: id},
            headers: {
              'X-RapidAPI-Key': '683e154806mshcc8ed03c31838e8p136db1jsndf38fbb0edda',
              'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
            }
          };
          
  await axios.request(options).then(function (response) {
      dispatch({type:'GET_VIDEO', payload:response.data})
  }).catch(function (error) {
      console.error(error);
  });

  
    } catch (error) {
        console.log(error)
    }
}

export default detailAction;