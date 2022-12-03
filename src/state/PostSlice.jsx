import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'




// First, create the thunk
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async(_,thunkApi)=>{

const{rejectWithValue}= thunkApi;

try {
    
    const res = await fetch ("http://localhost:5000/posts");
    const data = res.json();
    return data ;
} catch (error) {
    return rejectWithValue(error.message);
}

} )
  
// second , delete the thunk

export const deletePost = createAsyncThunk("posts/deletePost", async(id,thunkApi)=>{

    const{rejectWithValue}= thunkApi;
    
    try {
        
        await fetch (`http://localhost:5000/posts/${id}`,{

        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
        });
       
        return id ;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    
    } )

    // third , add post 
    export const InsertPost = createAsyncThunk("posts/addPost", async(item,thunkApi)=>{

        const{rejectWithValue}= thunkApi;
        
        try {
            
           const res = await fetch (`http://localhost:5000/posts`,{
    
            method: "POST",
            body:JSON.stringify(item),
            headers: {
                "Content-Type": "application/json ; charset=utf-8",
            }
            });
           
            const data = await res.json();
            return data ;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
        } )
      
const initialState = { records: [], loading : false , error:null}


const postSlice = createSlice({


    name: 'posts',
    initialState,
    reducers: {},
    extraReducers :{
//fetchposts
        [fetchPosts.pending]:(state)=>{

            state.loading=true;
            state.error= null;
        },
        [fetchPosts.fulfilled]:(state,action)=>{

            state.loading= false;
        //  state.records.push(...action.payload)
        state.records = action.payload;

        },
        [fetchPosts.rejected]:(state,action)=>{
            state.loading= false;
            state.error=action.payload;

        },
 //createposts 

 [InsertPost.pending]:(state)=>{

    state.loading=true;
    state.error= null;
},
[InsertPost.fulfilled]:(state,action)=>{

    state.loading= false;
 state.records.push(action.payload)


},
[InsertPost.rejected]:(state,action)=>{
    state.loading= false;
    state.error=action.payload;

},
 
 //deleteposts

 [deletePost.pending]:(state)=>{

    state.loading=true;
    state.error= null;
},
[deletePost.fulfilled]:(state,action)=>{

    state.loading= false;
state.records= state.records.filter((el)=> el.id !== action.payload)

},
[deletePost.rejected]:(state,action)=>{
    state.loading= false;
    state.error=action.payload;

},
 //editposts
    }
})

export default postSlice.reducer