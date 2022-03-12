import React from 'react'
import { Button } from 'antd'
import {Link} from 'react-router-dom'
import "./loginRegisterBtns.css";

const LoginRegisterBtns = () => {
  return (
    <>
      <Button className="login" type="primary">
        <Link to="/login">Login</Link>
      </Button>
      <Button className="register" type="danger">
        <Link to="/create-account">Create account</Link>
      </Button>
    </>
  );
}

export default LoginRegisterBtns