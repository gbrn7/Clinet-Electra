import { Navigate, Route, Routes } from "react-router-dom";
import PageSignin from "../pages/signin";
import GuestOnlyRoute from "../components/GuestOnlyRoute";
import GuardRoute from "../components/GuardRoute";
import Dashboard from "../pages/dashboard";
import ENavbar from "../components/ENavbar";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="signin" 
      element={
        <GuestOnlyRoute>
          <PageSignin/>
        </GuestOnlyRoute>
      }
      />
      <Route
        path="/"
        element={
          <>
            <ENavbar/>
            <GuardRoute/>
          </>
        }
      >
        <Route path="" element={<Navigate to="/dashboard" replace={true}/>}/>
        <Route path="dashboard/*" element={<Dashboard/>}/>
      </Route>
    </Routes>
  )
}
