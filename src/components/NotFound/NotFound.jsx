import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import img from "../../Assets/images/notfound.jpg"
import { useThemeHook } from '../../GlobalComponants/ThemeContextProvider';
import styled from './notFound.module.css';


import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from "react-bootstrap";
export default function NotFound() {
  const error = useRouteError();
  const theme = useThemeHook();
  const navigate =useNavigate();
  return (
   
    <div className='center-flex'>
      <div className="img_container w-25 m-auto">

      <img src={img} alt="notfound" className='w-100' />
      </div>
  



    <Container fluid 
    style={
      {
        margin:"0",
        padding:"0"
      }
  
      
    }
    
    className={theme ? `${styled.bg_container} vh-100`:`${styled.bg_container_light} vh-100`}
    
    >
      
      <Row 
      style={{

paddingTop:"100px"

      }}>

        <Col xs={{ span: 8, offset: 2 }}>
          <div className="mt-5 text-center">


                <h1>Opps!!!</h1>
                <p>Sorry , an un Expected Error has Occured</p>

                <i> {error.statusText || error.message}</i><br/>
                <Button variant="danger"
                
                onClick={()=> navigate("/" , {replace:true})}
                >Back</Button>

          </div>


        </Col>
      </Row>
    </Container>
    
   
      
    </div>
  )
}
