import React, { useCallback } from "react";
import { Form, Input, Button } from 'antd'
import {verifyAccount} from '../../apis/auth'
import './verify.css'


const Verify = () => {

    const clickToVerify = useCallback( async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.data.id;
        const response = await verifyAccount(userId)
        console.log(response.data);


    }, [])




  return (
    <section className="verify">
      <div className="container center">
              <div className="form-verify">
                  <h3>Please, check your email to enter the code </h3>
          <Form>
            <Form.Item>
              <Input placeholder="Type your code..." />
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