import React from 'react'
import '../Styles/Shimmer.css'

const MakeShimmer=()=>{

    return(

        
            <h1 className='shimmer'></h1>
        
    )
}
const Shimmer = () => {
   
  return (
    <div className='shimmerCards'>
  
    {Array.from(
      { length: 9 },
      (_, i) => <MakeShimmer key={i}/>
    )}
    </div>
 
)
  
}

export default Shimmer
