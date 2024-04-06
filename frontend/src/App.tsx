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
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const App = () => {
  // const { isLoggedIn } = useAppContext();
  return (
    <div>
       <header>
      <SignedOut>
        <SignInButton /><p>fhdjsbfhdsagfuhkjdashbfhg</p>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
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
    

    </div>
    
  );
};

export default App;
