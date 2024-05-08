import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {

  const { currentUser } = useSelector((state) => state.auth);
  const location = useLocation();


  if (!currentUser) {
    return <Navigate to="/Login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
