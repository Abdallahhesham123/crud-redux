
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";
import { Provider } from "react-redux";
import store from "./state";
import AddPost from "./components/ADD/AddPost";


function App() {

  let routes = createBrowserRouter([
    {
      path: "/", element: <Layout />,errorElement: <NotFound/>,children: [
        { index: true, element: <Home/>},
        { path: "about", element:   <About/> },
        {  path: "post",element: <Home/>},
        { path: "post/add", element:   <AddPost/> },
        { path: "post/:id/edit",
         element:   <Edit/>,

         loader:({params})=>{
          if(isNaN(params.id)){
  
            throw new Response("Not Found", { statusText:"please Make sure to insert correct path",status: 404 });
          }
  
           }
      
      
      
      },
        {
          
          path: "post/:id/detail",
         element:   <Details/> ,
         loader:({params})=>{
        if(isNaN(params.id)){

          throw new Response("Not Found", { statusText:"please Make sure to insert correct path",status: 404 });
        }

         }
        
        },
        { path: "login", element:  <Login /> },
        {path: "register", element: <Register/> },


  ]}
  
])
  return (
        <>
        <Provider store={store}>
        <RouterProvider router={routes}/>

        </Provider>
        
        </>
   



  );
}

export default App;
