import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import UserPage from "./components/user/UserPage";
import Login from "./components/Login";
import TutorialList from "./components/tutorials/TutorialList";
import AddTutorial from "./components/tutorials/AddTutrial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForm from "./components/user/UserForm";
import { useEffect, useState } from "react";
import DateTimeLabel from "./utils/DateTimeLabel";
import { FiLogOut, FiEdit } from "react-icons/fi";
import Dashboard from "./components/dashboard/Dashboard";
import ProductTable from "./components/prodcut/ProductTable";
import Category from "./components/category/Category";
import Typyicode from "./components/Typyicode";
import ResizableDiv from "./components/resizable/ResizableDiv";
import DesktopNotification from "./components/notifications/DesktopNotification";
import VideoPlayer from "./components/video/VideoPlayer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setIsNavCollapsed(true); // Reset the navbar collapse state
  };

  const getUser = () => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    return parsedUser;
  };

  const getUserNameFromLocalStorage = () => {
    return getUser()?.client_first_name;
  };

  const isAdmin = () => {
    const user = getUser();
    if (user.role === "admin") {
      return true;
    }
    return false;
  };

  return (
    <div className="App">
      {isLoggedIn && (
        <div>
          <DateTimeLabel />
          <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#3498db" }}
          >
            <div className="container">
              <Link to="/" className="navbar-brand text-light">
                CodePact <span>{"</>"}&#60;/&#62;</span>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={!isNavCollapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={() => setIsNavCollapsed(!isNavCollapsed)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`${
                  isNavCollapsed ? "collapse" : ""
                } navbar-collapse`}
                id="navbarNav"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/video" className="nav-link text-light">
                      Video Player
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/desktopNotification" className="nav-link text-light">
                      Desktop Not.
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-light">
                      Dashboard
                    </Link>
                  </li>
                  {isAdmin() && (
                    <li className="nav-item">
                      <Link to="/users" className="nav-link text-light">
                        Users
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <Link to="/products" className="nav-link text-light">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/suppliers" className="nav-link text-light">
                      Suppliers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/shifts" className="nav-link text-light">
                      Shifts
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/categories" className="nav-link text-light">
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/invoice" className="nav-link text-light">
                      Invoice
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/typyicode" className="nav-link text-light">
                      TYPYICODE EXT.
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/resizableDiv" className="nav-link text-light">
                      ResiableDiv
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle btn btn-link text-light"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <FiEdit className="dropdown-icon" />{" "}
                      {/* Edit Profile Icon */}
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          <FiLogOut className="dropdown-item-icon" /> Logout
                        </button>
                      </li>
                      <li>
                        <Link to="/userForm" className="dropdown-item">
                          <FiEdit className="dropdown-item-icon" /> Edit Profile
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )}
      <div className="container mt-3">
        <Switch>
          {isLoggedIn ? (
            <>
              {isAdmin() && <Route exact path="/users" component={UserPage} />}
              <Route exact path="/tutorials" component={TutorialList} />
              <Route exact path="/video" component={VideoPlayer} />
              <Route exact path="/addTutorial" component={AddTutorial} />
              <Route exact path="/userForm" component={UserForm} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/products" component={ProductTable} />
              <Route exact path="/categories" component={Category} />
              <Route exact path="/typyicode" component={Typyicode} />
              <Route exact path="/resizableDiv" component={ResizableDiv} />
              <Route exact path="/desktopNotification" component={DesktopNotification} />
            </>
          ) : (
            <Route
              exact
              path="/"
              render={() => <Login onLogin={handleLogin} />}
            />
          )}
        </Switch>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
