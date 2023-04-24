import moment from 'moment'
import React from 'react'
import ReactPlayer from 'react-player'
import {AiOutlineLike,AiOutlineDislike} from "react-icons/ai"

const DetailCard = ({video}) => {
  return (
    <div style={{width:"600px",margin:"50px"}}>
      <ReactPlayer   url={`https://www.youtube.com/watch?v=${video?.id}`}  />
      <div style={{fontSize:"24px", fontStyle:"bold", paddingLeft:"25px",marginTop:"20px" }}> {video?.snippet?.title} </div>
      <div style={{paddingLeft:"15px", marginTop:"10px", fontStyle:"inherit"}}>
        <span>
            {
                video?.statistics?.viewCount
            }   Görüntülenme
        </span>
        <span>
            {
             moment   (video?.snippet?.publishedAt).startOf('day').fromNow()
            }
        </span>
      </div>
      <div style={{color:"gray", marginTop:"5px", fontSize:"16px",paddingLeft:"25px"}}>
        {(video?.snippet?.description).substring(0,200)}...
      </div >
      <div  style={{color:"DodgerBlue", marginTop:"5px", fontSize:"16px",paddingLeft:"25px"}}>
        {
            video?.snippet?.tags?.map((tag,i)=> `#${tag}`)
        }
      </div>
      <div style={{display:"flex", alignItems:"center",}}>
        <span style={{display:"flex", alignItems:"center",marginTop:"15px"}}> <AiOutlineLike style={{fontSize:"28px"}}/> {video?.statistics?.likeCount}  </span>
        <span style={{display:"flex", alignItems:"center",marginTop:"15px"}}> <AiOutlineDislike  style={{fontSize:"26px"}}/> Görüntülenme </span>
      </div>
     
    </div>
  )
}

export default DetailCard
