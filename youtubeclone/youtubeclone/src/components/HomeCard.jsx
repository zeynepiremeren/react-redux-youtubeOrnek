import React from 'react'
import moment from "moment"

const HomeCard = ({video}) => {

  return (
    <div onClick={() => {
      if (video && video.id && video.id.videoId) {
          window.location = `videos/${video.id.videoId}`;
      }
  }}
   style={{width:"500px", flexWrap:"wrap",marginBottom:"50px" }} >
       <img style={{width:"500px", height:"300px", borderRadius:"10px"}} src={video?.snippet?.thumbnails?.high?.url} alt="" />
         <div style={{fontSize:"24px",flexWrap:"wrap",marginTop:"20px"}}>{ (video?.snippet.title).substring(0,50)}... </div>
         <div style={{color:"darkgrey" ,marginBottom:"10px"}}>{video.snippet.channelTitle} </div>
         <div style={{ marginLeft:"0px", justifyContent:"space-between" }}>
            <span style={{color:"darkgray"}}>100k görüntüleme</span>
            <span style={{color:"darkgray"}}>{moment(video.snippet.publishedAt).startOf('day').fromNow()}</span>
         </div>
    </div>
  )
}

export default HomeCard
