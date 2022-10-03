import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
// import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import "./App.css";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  try {
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
          );
        } else {
          dispatch(logout());
        }
      });
      return unsubscribe;
    }, [dispatch]);
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
