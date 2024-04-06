import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";

import Form from "./pages/Form";
import Result from "./pages/Result";

const App = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
         <Route
          path="/form"
          element={
            <Layout>
              <Form />
            </Layout>
          }
        /> 

        <Route
          path="/result"
          element={
            <Layout>
              <Result />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
