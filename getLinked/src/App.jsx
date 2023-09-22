// import React from 'react'
import { createHashRouter, RouterProvider} from "react-router-dom"
import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Register from './pages/Register';


// const Layout = () => {
//   return (
//     <div>
//       <LandingPageNav />
//       <Outlet />
//     </div>
    
//   )
// }


function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
