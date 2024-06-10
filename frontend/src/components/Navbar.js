import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchProjet from "./SearchProjet";
import { logout } from "../slices/auth"
import EventBus from "../common/EventBus";

function Navbar() {
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);
  
    useEffect(() => {
      if (currentUser) {
       
        setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
      } else {
       
        setShowAdminBoard(false);
      }
  
      EventBus.on("logout", () => {
        logOut();
      });
  
      return () => {
        EventBus.remove("logout");
      };
    }, [currentUser, logOut]);

    return (<>
    
    <nav className="navbar nav-app navbar-expand navbar-light">
          <Link to={"/"} className="navbar-brand">
            CrowdFunding
          </Link>
          <div className="navbar-nav mr-auto">

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

         
          <div>
            <SearchProjet />
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <div>
                <button type="button" className="btn-projet btn btn-sm btn-primary">
                  Create my projet
                </button>
              </div>
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item nav-btn-style">
                <Link to={"/register"} className="nav-link nav-text-color">
                  Sign up
                </Link>
              </li>
              
            </div>
          )}
        </nav>

    
    </>);
}

export default Navbar