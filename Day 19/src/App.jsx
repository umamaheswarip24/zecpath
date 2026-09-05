import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import CandidateOverview from "./pages/dashboard/CandidateOverview";
import CandidateProfile from "./pages/dashboard/CandidateProfile";
import EmployerPostJob from "./pages/dashboard/EmployerPostJob";
import EmployerListings from "./pages/dashboard/EmployerListings";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ComponentsDemo from "./pages/ComponentsDemo";
import JobFeed from "./pages/JobFeed";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes with standard layout */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/components" element={<ComponentsDemo />} />
            <Route path="/jobs" element={<JobFeed />} />
          </Route>

          {/* Protected Dashboard Layout with Nested Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<CandidateOverview />} />
            <Route path="profile" element={<CandidateProfile />} />
            <Route path="post-job" element={<EmployerPostJob />} />
            <Route path="listings" element={<EmployerListings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}