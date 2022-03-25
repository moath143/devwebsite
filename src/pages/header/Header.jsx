import React, { useState, useEffect } from "react";
import useAuth from "../../utils/helpers/isAuth";
import { Row, Col, Input, Button } from "antd";

import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LoginRegisterBtns from "../../components/loginRegisterBtns";
import "./header.css";
import DropdownMenu from "./../../components/dropdown";

const Header = () => {
  //  const[user, setUser] = useState({});

  const { Search } = Input;
  // const userStorage = localStorage.getItem("login");
  // if (userStorage) {
  //   const user = JSON.parse(userStorage).data.user;
  //   setUser(user);
    
  // }


  return (
    <header>
      <div className="container">
        <Row className="navbar">
          <Col sm={12}>
            <div className="brand-search">
              <div className="brand">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="search">
                <Search placeholder="input search text" enterButton />
              </div>
            </div>
          </Col>
          <Col sm={12}>
            <div className="login-register">
              {useAuth().isAuthenticated ? (
                <div className="profile">
                  <Button className="create-post">
                    <Link to="/create-post">Create post</Link>
                  </Button>
                  <DropdownMenu  />
                </div>
              ) : (
                <LoginRegisterBtns />
              )}
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
