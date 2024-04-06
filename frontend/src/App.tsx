import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layout/Layout";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn";
// import AddHotel from "./pages/AddHotel";
// import { useAppContext } from "./contexts/AppContext";
// import MyHotels from "./pages/MyHotels";
// import EditHotel from "./pages/EditHotel";
// import Search from "./pages/Search";
// import Detail from "./pages/Details";
// import Booking from "./pages/Bookings";
// import MyBookings from "./pages/MyBooking";
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
        {/* <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />

        {isLoggedIn && (
          <>
            <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            />
            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
            <Route
              path="/my-hotels"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
            <Route
              path="/my-bookings"
              element={
                <Layout>
                  <MyBookings />
                </Layout>
              }
            /> */}
          {/* </>
        )} */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
