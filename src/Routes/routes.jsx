import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement: <Errorpage/>,
   children: [
    {
        index: true,
        loader: ()=> fetch('booksData.json'),
        path:'/',
        Component: Home
    }
   ]
  },
]);