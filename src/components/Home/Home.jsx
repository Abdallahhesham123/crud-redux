
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts}from "./../../state/PostSlice"
import  PostList from "./../PostsList/PostList"


const Home = () => {
const dispatch = useDispatch();
const {records ,loading ,error} = useSelector(state =>state.posts)

useEffect(() => {

  dispatch(fetchPosts())
}, [dispatch])

  return  <PostList data={records} loading={loading} error={error}/>
  
   
}

export default Home