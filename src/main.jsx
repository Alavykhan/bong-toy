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
import PrivateRoute from './Route/PrivateRoute';
import AllToys from './components/AllToys/AllToys';
import MyToy from './components/MyToy/MyToy';
import AddAToy from './components/AddAToy/AddAToy';


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
        element:<PrivateRoute><SingleToy/></PrivateRoute>,
        loader: ({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path:'allToys',
        element: <AllToys/>,
        loader: ()=>fetch('http://localhost:5000/toys')
      },
      {
        path:'mytoy',
        element:<MyToy/>
      },
      {
        path:'addatoy',
        element:<AddAToy/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}/>
  </AuthProvider>,
)
