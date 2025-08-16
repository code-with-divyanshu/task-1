import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import DummyList from "../pages/DummyList/DummyList";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/" replace />}
      />
      <Route path="/dummy-list" element={<DummyList />} />
    </Routes>
  );
};

export default MainRoutes;
