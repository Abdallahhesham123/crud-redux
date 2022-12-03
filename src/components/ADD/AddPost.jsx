import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import {InsertPost} from "./../../state/PostSlice"
const AddPost = () => {
  const dispatch = useDispatch();
  const [title,settitle] = useState("")
  const [description,setdescription] = useState("")
  const [price,setprice] = useState(0)
  const [category,setcategory] = useState(0)
  const formHandler = (e)=>{
e.preventDefault();
const id = Math.floor(Math.random() *500)
dispatch(InsertPost({ id ,title ,description , price , category}))
  }
  return (
    <Container className='my-5'>
      <Row className='py-5'>
      <Form onSubmit={formHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" value={title}
      onChange={(e)=>settitle(e.target.value)}
      />
      <Form.Text className="text-muted">
        Please , enterTitle
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Discription</Form.Label>
      <Form.Control type="text" placeholder="Description" 
      onChange={(e)=>setdescription(e.target.value)}
      value={description}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" placeholder="price"
      onChange={(e)=>setprice(e.target.value)}
      value={price}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Category</Form.Label>
      <Form.Control type="text" placeholder="Category" 
       onChange={(e)=>setcategory(e.target.value)}
       value={category}
 
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>


      </Row>

    </Container>

  )
}

export default AddPost