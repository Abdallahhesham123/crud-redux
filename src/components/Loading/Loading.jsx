import React from 'react'

const Loading = ({loading , error , children}) => {
  return (
    <>
    
    {loading ?
                  (<tr><td colSpan={3} >Loading... , Please wait</td></tr>):
                  error ?
    (<tr><td   colSpan={3}>Sorry!!!, there is an error occured</td></tr>)
    
    :
    children
    
    }
    </>
  )
}

export default Loading