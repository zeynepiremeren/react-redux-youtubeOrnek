import React, { useState } from 'react'
import images from "../assets/images/images"
import {BsCameraVideo} from "react-icons/bs"



const Navbar = () => {

   const [searchKeyword, setSearchKeyword]= useState('')
  
   const onKeyFunc =(e)=>{
    if(e.key=== 'Enter'){
      searchFunc();
    }
   }
  
   const searchFunc =()=>{
    if(searchKeyword.length > 0){
      window.location =`/search/${searchKeyword}`
    }
    
   }

  return (
    <div style={{width:"100%", display:"flex", alignItems:"center", height:"100px", justifyContent:"space-between"}}>
      <div style={{width:"25%",display:"flex"}}>
      <i style={{fontSize:"36px",position:"relative", top:"25px", height:"40px"}} className="fa-sharp fa-solid fa-bars"></i>
      <img style={{width:"180px", height:"90px" }} src={images.youtube} alt="" />
      </div>


      <div style={{width:"50%", display:"flex", alignItems:"center"}}>  
      <div style={{width:"75%", display:"flex", alignItems:"center"}}>
         <input onKeyPress={onKeyFunc}  value={searchKeyword} onChange={e => setSearchKeyword(e.target.value)} style={{border:"1px solid lightGray", width:"593px", height:"50px",borderRadius:"40px",paddingLeft:"25px"}} type="text" placeholder='Ara' />
         <div onClick={searchFunc} style={{fontSize:"30px"}}>
         <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
         </div>
      </div>
    
     <div style={{fontSize:"36px"}} >
     <i   className="fa-sharp fa-solid fa-microphone"></i>
     </div>
     </div>


      <div style={{width:"25%", display:"flex", alignItems:"center", justifyContent:"end"}}>
      <i style={{ paddingRight:"0px",fontSize:"30px"}} > <BsCameraVideo/>  </i>
      <i style={{ paddingRight:"5px",fontSize:"26px"}}  className="fa-sharp fa-regular fa-bell"></i>

        <div style={{width:"50px", height:"50px", backgroundColor:"gray", borderRadius:"100px",paddingRight:"40px",fontSize:"30px"}}>

        </div>
      </div>
    </div>
  )
}

export default Navbar
