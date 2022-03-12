import React, {useState, useCallback } from "react";
import { Form, Input, Button } from 'antd'
import {verifyAccount} from '../../apis/auth'
import './verify.css'
import { useNavigate } from "react-router-dom";


const Verify = () => {
  const [verificationCode, setVerificationCode] = useState(Number)
  let navigate = useNavigate();
      const userJson = JSON.parse(localStorage.getItem("user"));
      const userId = userJson.data.data.id;
      let user = {
        id: userId,
        verificationCode: Number(verificationCode),
      };

  const clickToVerify = async () => {

    const res = await verifyAccount(user);
    if (res.status === "success") {
      return navigate("/");
    }

    return navigate("/verify");
  };
    
  
  
    // useCallback(, [verificationCode]);




  return (
    <section className="verify">
      <div className="container center">
        <div className="form-verify">
          <h3>Please, check your email to enter the code </h3>
          <Form>
            <Form.Item>
              <Input
                placeholder="Type your code..."
                onChange={(e) => setVerificationCode(e.target.value)}
                
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" onClick={clickToVerify}>
              Verify
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Verify