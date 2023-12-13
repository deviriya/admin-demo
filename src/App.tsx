import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import ForgotPassword from './pages/Forgotpassword/forgotpassword'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;



// import { Fragment } from 'react';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   createRoutesFromElements,
//   Outlet,
// } from "react-router-dom";
// import Dashboard from './pages/Dashboard/dashboard';
// import { Navbar } from './components/header';
// import { Sidebar } from './components/sidebar';

// function App() {

//   const RouteWithlodaer = () => {
//     return (
//       <Fragment>
//         <Outlet />
//       </Fragment>
//     )
//   }

//   const RouteWithSidebar = () => {
//     return (
//       <Fragment>
//         <Sidebar />
//           <Navbar />
//         <div className='main-content'>
//           <Outlet />
//         </div>
//       </Fragment>
//     )
//   }

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route>
//         <Route path='/' element={<RouteWithSidebar />}>
//           <Route index element={<Dashboard />} />
//         </Route>
//       </Route>
//     )
//   )

//   return (
//     <div className=''>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App
