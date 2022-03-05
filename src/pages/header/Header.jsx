import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
  const { Search } = Input
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
              <Button className="login" type="primary">
                <Link to="/login">Login</Link>
              </Button>
              {/* <Button className="login" type="primary">
                <Link to="/verify">verify</Link>
              </Button> */}
              <Button className="register" type="danger">
                <Link to="/create-account">Create account</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}

export default Header