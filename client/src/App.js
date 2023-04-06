import React from 'react'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";
import ErrorPage from './components/ErrorPage';

const App = () => {
  return (
    <div>
      <Router>

        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<About />}
          ></Route>
          <Route
            exact
            path="/contact"
            element={<Contact />}
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={<Signup />}
          ></Route>
          <Route
            exact
            path="/*"
            element={<ErrorPage />}
          ></Route>
        </Routes>

      </Router>
    </div >
  )
}

export default App;