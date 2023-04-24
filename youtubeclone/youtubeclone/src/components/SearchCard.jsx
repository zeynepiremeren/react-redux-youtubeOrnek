import React from 'react'
import moment from 'moment'

const SearchCard = ({search}) => {
  return (
    <div  onClick={() => {
        if (search && search.id && search.id.videoId) {
            window.location = `/videos/${search.id.videoId}`;
        }
    }}
      style={{display:"flex", marginLeft:"50px",marginTop:"80px",  }}>
      <img style={{padding:"0px", margin:"0px",width:"450px",height:"250px", borderRadius:"20px"}} src={search?.snippet?.thumbnails?.high?.url} alt="" />
      <div>
        <div style={{fontStyle:"inherit",fontSize:"24px",width:"500px"}}> {(search?.snippet?.title).substring(0,50)} ... </div>
        <div style={{marginTop:"10px"}} >
            <span style={{color:"Silver", fontsize:"32px", }}> 3,5 B görüntülenme </span>
            <span style={{color:"Silver", fontsize:"32px"}}> { moment   (search?.snippet?.publishedAt).startOf('day').fromNow()} </span>
        </div>
        <div style={{display:"flex"}}>
            <img style={{width:"40px", height:"40px", borderRadius:"100px", backgroundColor:"gray",marginTop:"20px",marginRight:"0px"}}  src={search?.snippet?.thumbnails?.default?.url}  alt="" />
            <div style={{marginTop:"30px",color:"Silver"}} >{search?.snippet?.channelTitle} </div>
        </div>
        <div style={{marginTop:"25px", paddingLeft:"10px",color:"Silver"}}>
        {(search?.snippet?.description ).substring(0,50)} ...
        </div>
      </div>
    </div>
  )
}

export default SearchCard
