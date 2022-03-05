import React from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import {Link} from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "../../utils/validation";
import {
  AppleFilled,
  GithubFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";
import './login.css'

const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerValidationSchema)
  });
  const{Text} = Typography

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <section className="login">
      <div className="container center">
        <div className="form-login">
          <h2>
            Welcome to DEV Community DEV Community is a community of 816,372
            amazing developers
          </h2>
          <Form onSubmitCapture={handleSubmit(onSubmit)}>
            <Button className="apple btn-signup" icon={<AppleFilled />}>
              Continue with Apple
            </Button>
            <Button className="forem btn-signup">Continue with Forem</Button>
            <Button className="github btn-signup" icon={<GithubFilled />}>
              Continue with Forem
            </Button>
            <Button
              className="twitter btn-signup"
              icon={<TwitterCircleFilled />}
            >
              Continue with Forem
            </Button>

            <Form.Item label="Email">
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input type="*email" {...field} />}
              />
            </Form.Item>
            {errors.email && <Text type="danger">{errors.email.message}</Text>}

            <Form.Item label="Password">
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input.Password type={"password"} {...field} />
                )}
              />
            </Form.Item>
            {errors.password && (
              <Text type="danger">{errors.password.message}</Text>
            )}

            <Form.Item>
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field}> Remember me </Checkbox>
                )}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Continue
            </Button>

            <p>
              <Link to="/login">I forgot my password</Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Login