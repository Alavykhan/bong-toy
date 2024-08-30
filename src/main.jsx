import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Route/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import SingleToy from './components/SingleToy/SingleToy';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'login',
        element: <Login/>
      },
      {
        path:'signUp',
        element:<SignUp/>
      },
      {
        path:'toy/:id',
        element:<SingleToy/>,
        loader: ({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>,
)
