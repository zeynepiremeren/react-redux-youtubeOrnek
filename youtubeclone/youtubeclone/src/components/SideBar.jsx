import React from 'react'
import dataSide from '../assets/data/dataSide'

const SideBar = () => {

  

  return (
    <div>
       {
        dataSide.map((data,i) =>(
            <div style={{fontSize:"16px", width:"20px" , height:"120px"}} key={i}>
               <div 
            
               style={{fontSize:"42px", position:"relative", left:"-30px" }} > <span >{data.icon} </span></div>

              <div> <span style={{ display:"flex",  position:"relative", left:"-10px", top:"-50px", justifyContent:"center"}} > {data.name} </span></div>
               
            </div>
        ))
       }
    </div>
  )
}

export default SideBar
