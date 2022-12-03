import React ,{memo} from "react";
import styled from "./Posts.module.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useThemeHook } from "../../GlobalComponants/ThemeContextProvider";
import PostListitem from "../postListItem/PostListitem";
import Loading from "../Loading/Loading";
import { deletePost } from "../../state/PostSlice";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PostList = ({ data, loading, error }) => {
  const theme = useThemeHook();
  const dispatch =useDispatch();
  const deleterecord = useCallback((id)=>
  dispatch(deletePost(id))
  ,[dispatch] )
  return (
    <Container
      fluid
      style={{
        margin: "0",
        padding: "0",
      }}
      className={
        theme
          ? `${styled.bg_container} vh-100`
          : `${styled.bg_container_light} vh-100`
      }
    >
      <Row
        style={{
          paddingTop: "100px",
        }}
      >
        <h1
          className={
            theme ? "text-center text-danger" : "text-center text-success"
          }
        >
          REDUX_TABLE
        </h1>

        <Col xs={{ span: 8, offset: 2 }}>
          <Link  to ="/post/add" variant="success" className=" btn btn-success w-25 my-2">
            Add
          </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th style={{ width: "70%" }}>Title</th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              <Loading loading={loading} error={error} >
              <PostListitem data={data} deleterecord={deleterecord}/>
              </Loading>
            
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(PostList);
