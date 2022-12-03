import React from 'react'

import {

    Button,
    ButtonGroup,
  } from "react-bootstrap";

const PostListitem = ({data,deleterecord}) => {
  const Deleteitem =(el)=>{
    if(window.confirm(`Are you sure you want to delete ${el.title}?`)){

      deleterecord(el.id)
    }
   
  }

    const record = data.map((el,index)=>{

        return (
      
      
      
          <tr key={index}>
          <td>{++index}</td>
          <td>{el.title}</td>
          <td>
            <ButtonGroup aria-label="Basic example">
              <Button variant="warning">Edit</Button>
              <Button variant="danger" onClick={()=>Deleteitem(el)}>Delete</Button>
            </ButtonGroup>
          </td>
        </tr>
        )
      
      })
      
  return (
    <>
    
 {record}
    </>
  )
}

export default PostListitem