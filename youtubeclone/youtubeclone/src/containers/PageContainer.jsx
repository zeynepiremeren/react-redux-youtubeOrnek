import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div style={{display:"flex", width:"100%"}}>
      {children}
    </div>
  )
}

export default PageContainer
