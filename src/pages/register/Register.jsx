import React, { useState } from "react";
import "./register.css";
import { Form, Input, Button, Tooltip, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "../../utils/validation";
import { registerAccount } from "../../apis/auth";
import {
  AppleFilled,
  GithubFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const Register = () => {
  const [emailUsed, setEmailUsed] = useState("");
  const[loading, setLoading] = useState(false)


  const { Text } = Typography;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  let navigate = useNavigate();



  const onSubmit = async (data) => {
    const response = await registerAccount(data);
    setLoading(true)
    
    
    if (response.status === "success") {
      let user = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      return navigate("/verify");
    }
    
    setLoading(false);
    setEmailUsed(response.data.data[0].message);
      
    
  };

  return (
    <section className="register">
      <div className="container center">
        <div className="form-register">
          <h2>
            Welcome to DEV Community DEV Community is a community of 816,372
            amazing developers
          </h2>
          <Form onSubmitCapture={handleSubmit(onSubmit)}>
            <Button className="apple btn-signup" icon={<AppleFilled />}>
              Sign up with Apple
            </Button>
            <Button className="forem btn-signup">Sign up with Forem</Button>
            <Button className="github btn-signup" icon={<GithubFilled />}>
              Sign up with Forem
            </Button>
            <Button
              className="twitter btn-signup"
              icon={<TwitterCircleFilled />}
            >
              Sign up with Forem
            </Button>

            <Tooltip
              placement="bottom"
              title={errors.firstName && errors.firstName.message}
            >
              <Form.Item label="First name">
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
              {errors.firstName && (
                <Text type="danger">{errors.firstName.message}</Text>
              )}
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={errors.lastName && errors.lastName.message}
            >
              <Form.Item label="Last name">
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input {...field} />}
                />
              </Form.Item>
              {errors.lastName && (
                <Text type="danger">{errors.lastName.message}</Text>
              )}
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={errors.email && emailUsed && errors.email.message}
            >
              <Form.Item label="Email">
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => <Input type="*email" {...field} />}
                />
              </Form.Item>
              {errors.email && (
                <Text type="danger">
                  {errors.email.message} <br />{" "}
                </Text>
              )}
              {/* {<br />} */}
              {emailUsed ? (
                <Text type="danger">{emailUsed}</Text>
              ) : (
                <Text type="danger"></Text>
              )}
            </Tooltip>
            <Tooltip
              placement="bottom"
              title={errors.password && errors.password.message}
            >
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
            </Tooltip>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              
            >
              {loading ? "Loading..." : "Sign up"}
              {console.log("🚀 ~ file: Register.jsx ~ line 154 ~ Register ~ loading", loading)}
            </Button>

            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Register;
