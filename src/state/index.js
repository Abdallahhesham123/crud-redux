import { configureStore } from '@reduxjs/toolkit'

import posts from './PostSlice'

const store = configureStore({ 


    reducer: {posts} 

})

export default store
// The store now has redux-thunk added and the Redux DevTools Extension is turned on