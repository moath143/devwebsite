import React, {useState} from 'react'
import { Form, Input, Button } from 'antd'
import { useNavigate } from "react-router-dom";
import {sendVerify} from '../../apis/auth'
import './sendverify.css'

const SendVerify = () => {

  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  const userEmail = {
    email: email,
  }
  
  const sendCode = async () => {
    const res = await sendVerify(userEmail);
    const userId = res.data;
    localStorage.setItem("user", JSON.stringify(userId));
    navigate('/verify')
    console.log(res.data)
  }


  return (
    <section className="send-verify">
      <div className="container center">
        <div className="form-verify">
          <h3>Please, type your email to send the code </h3>
          <Form>
            <Form.Item>
              <Input
                placeholder="Type your email..."
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Item>

            <Button type="primary" htmlType="submit" onClick={sendCode}>
              Send
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default SendVerify