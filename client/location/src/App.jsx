import Home from "./pages/home";
import Register from "./component/AuthComponents/register";
import Login from "./component/AuthComponents/login";
import { Auth } from "./pages/Auth/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ProtectedRoute from "./Protected Route/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/Login" element={<Auth />} />

            <Route
              index
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
      {/* */}
    </>
  );
}

export default App;
